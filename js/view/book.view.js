var bookView = (function (libraryController) {
	'use strict';

	function initialize() {
		displayLibrary();

		document
			.querySelector('#allBooksLabel')
			.addEventListener('click', displayLibrary);
		document
			.querySelector('.search-panel__search-input')
			.addEventListener('input', displaySearch);
		document
			.querySelector('#mostPopularLabel')
			.addEventListener('click', displayMostPopular);
		document
			.querySelector('.sidebar__btnAdd')
			.addEventListener('click', addNewBook);
	}

	function clearLibrary() {
		document.querySelector('.content__container').innerHTML = '';
	}

	function createBookHTML(Book) {
		var MAX_RATING_VALUE = bookStorage.maxRatingValue;
		var stars = (Book.rating === 5) ? 0 : MAX_RATING_VALUE - Book.rating;
		// TODO: Use string literals+		
		var bookHTML = `<div class="content__book-entry">\
                      <div class="content__book-cover">\
                        <img src="${Book.coverPath}" alt="${Book.title}" width="200" height="275" />\
                      </div>\
                      <div class="content__book-name">${Book.title}</div>\
                      <div class="content__book-author">\
                        by ${Book.author}</div>\
                      <div class="content__book-rating">`;
		/*var bookHTML = '<div class="content__book-entry">\
                      <div class="content__book-cover">\
                        <img src="' + Book.coverPath + '" alt="' + Book.title + '" width="200" height="275" />\
                      </div>\
                      <div class="content__book-name">' + Book.title + '</div>\
                      <div class="content__book-author">\
                        by ' + Book.author + '</div>\
                      <div class="content__book-rating">';*/

		var ratingHTML = '';

		for (var i = 0; i < MAX_RATING_VALUE; i++) {
			if (i === stars) {
				ratingHTML += '<input type="radio"\
                    id="star' + Book.id + '_' + (MAX_RATING_VALUE - i) +
					'" name="rating' + Book.id +
					'" checked="true"\
                    value="' + (MAX_RATING_VALUE - i) + '" />\
                    <label class="content__star-label" for="star' + Book.id + '_' + (MAX_RATING_VALUE - i) + '"></label>';
			} else {
				ratingHTML += '<input type="radio"\
                    id="star' + Book.id + '_' + (MAX_RATING_VALUE - i) +
					'" name="rating' + Book.id +
					'" value="' + (MAX_RATING_VALUE - i) + '" />\
                    <label class="content__star-label" for="star' + Book.id + '_' + (MAX_RATING_VALUE - i) + '"></label>';
			}
		}

		var endingHTML = '</div></div>';

		document.querySelector('.content__container').innerHTML += bookHTML + ratingHTML + endingHTML;
	}

	function addBook() {
		var book = new Book(
			libraryController.getLibrary().length + 1,
			document.querySelector(".addBookTitle").value,
			document.querySelector(".addBookAuthor").value,
			bookStorage.coversFolder + document.querySelector(".addBookCover").value.split(/(\\|\/)/g).pop(),
			0
		);

		var notification = new Notification(
			libraryController.getNotifications().length + 1,
			//View.bookTitle,
			document.querySelector('.addBookTitle').value,
			//View.bookAuthor,
			document.querySelector('.addBookAuthor').value,
			document.querySelector('.addBookAuthor').value,
			'Library',
			null,
			null,
			new Date(),
			'add'
		);

		if (book.author && book.title) {
			bookStorage.LibraryDB.push(book);
		}

		if (notification.author && notification.title) {
			notificationStorage.NotificationDB.push(notification);
		}
	}

	function displayLibrary() {
		clearLibrary();

		for (var i = 0; i < libraryController.getLibrary().length; i++) {
			createBookHTML(libraryController.getLibrary()[i]);
		}

		getRating();
	}

	function displaySearch() {
		var searchQuery = document.querySelector('.search-panel__search-input').value;
		var result = libraryController.searchBook(searchQuery);

		clearLibrary();

		for (var i = 0; i < result.length; i++) {
			createBookHTML(result[i]);
		}

		for (var i = 0; i < libraryController.getNotifications().length; i++) {
			if (libraryController.getNotifications()[i].tag === 'search') {
				notificationView.createSearchNotificationHTML(libraryController.getNotifications()[i]);
			}
		}

		getRating();
	}

	function getRating() {
		var selector;
		var elem;

		for (var i = 1; i < libraryController.getLibrary().length + 1; i++) {
			for (var j = 1; j < bookStorage.maxRatingValue + 1; j++) {
				selector = '#star' + i + '_' + j;
				elem = document.querySelector(selector);

				if (elem) {
					elem.addEventListener('click', updateRating);
				}
			}
		}
	}

	function displayMostPopular() {
		var result = libraryController.getMostPopular();

		clearLibrary();

		for (var i = 0; i < result.length; i++) {
			createBookHTML(result[i]);
		}

		for (var i = 0; i < libraryController.getNotifications().length; i++) {
			if (libraryController.getNotifications()[i].tag === 'filter') {
				notificationView.createFilterNotificationHTML(libraryController.getNotifications()[i]);
			}
		}

		getRating();
	}

	function addNewBook() {
		addBook();
		clearLibrary();
		notificationView.clearNotifications();

		var result = libraryController.getLibrary();

		for (var i = 0; i < result.length; i++) {
			createBookHTML(result[i]);
		}

		var notificationsResult = libraryController.getNotifications();

		for (var i = 0; i < notificationsResult.length; i++) {
			notificationView.createAddNotificationHTML(notificationsResult[i])
		}

		getRating();
	}

	function updateRating() {
		var currentRating = Number(this.value);
		var libraryIdOfClickedBook = parseInt(this.id.substring(4, 6)) - 1;

		libraryController.updateRating(currentRating, libraryIdOfClickedBook);
	}

	return {
		initialize: initialize,
		clearLibrary: clearLibrary,
		createBookHTML: createBookHTML,
		displayLibrary: displayLibrary,
		displaySearch: displaySearch,
		getRating: getRating,
		displayMostPopular: displayMostPopular,
		addBook: addBook,
		addNewBook: addNewBook
	};
})(libraryController);
