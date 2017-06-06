var libraryController = (function (bookStorage, notificationStorage) { //library
	'use strict';

	var MAX_RATING_VALUE = bookStorage.maxRatingValue;

	function getLibrary() {
		return bookStorage.LibraryDB;
	}

	function getNotifications() {
		return notificationStorage.NotificationDB;
	}

	function getMostPopular() {
		var filtered = [];

		for (var i = 0; i < getLibrary().length; i++) {
			if (getLibrary()[i].rating === MAX_RATING_VALUE) {
				filtered.push(getLibrary()[i]);
			}
		}

		var notification = new Notification(
			getNotifications().length + 1,
			null,
			null,
			'Most Popular',
			null,
			null,
			new Date(),
			'filter'
		);

		notificationStorage.NotificationDB.push(notification);

		return filtered;
	}

	function searchBook(searchQuery) {
		var result = getLibrary().filter(function (elem) {
			return elem.title.substring(0, searchQuery.length).toLowerCase() === searchQuery.toLowerCase();
		});

		var notification = new Notification(
			getNotifications().length + 1,
			null,
			null,
			null,
			searchQuery,
			null,
			new Date(),
			'search'
		);

		if (notification.search !== null) {
			notificationStorage.NotificationDB.push(notification);
		} else {
			notificationStorage.NotificationDB.splice(-1, 1);
		}

		return result;
	}



	function updateRating(currentRating, libraryIdOfClickedBook) {
		bookStorage.LibraryDB[libraryIdOfClickedBook].rating = currentRating;

		var notification = new Notification(
			libraryController.getNotifications().length + 1,
			libraryController.getLibrary()[libraryIdOfClickedBook].title,
			libraryController.getLibrary()[libraryIdOfClickedBook].author,
			null,
			null,
			libraryController.getLibrary()[libraryIdOfClickedBook].rating,
			new Date(),
			'rating'
		);

		notificationStorage.NotificationDB.push(notification);

		for (var k = 0; k < libraryController.getNotifications().length; k++) {
			if (libraryController.getNotifications()[k].tag === 'rating') {
				notificationView.createRatingNotificationHTML(libraryController.getNotifications()[k]);
				notificationStorage.NotificationDB.splice(-1, 1);
			}
		}
	}

	function timeSince(date) {
		var seconds = Math.floor((new Date() - date) / 1000);

		// Check years
		var interval = Math.floor(seconds / 31536000);
		if (interval > 1) {
			return interval + ' years ago';
		}

		// Check months
		interval = Math.floor(seconds / 2592000);
		if (interval > 1) {
			return interval + ' months ago';
		}

		// Check days
		interval = Math.floor(seconds / 86400);
		if (interval > 1) {
			return interval + ' days ago';
		}

		// Check hours
		interval = Math.floor(seconds / 3600);
		if (interval > 1) {
			return interval + ' hours ago';
		}

		//Check minutes
		interval = Math.floor(seconds / 60);
		if (interval > 1) {
			return interval + ' minutes ago';
		}

		return 'less than a minute ago';
	}


	return {
		getLibrary: getLibrary,
		getNotifications: getNotifications,
		getMostPopular: getMostPopular,
		searchBook: searchBook,
		timeSince: timeSince,
		updateRating: updateRating
	}
})(bookStorage, notificationStorage);
