var Controller = (function () {
	'use strict';

	var currentNotifications = [];

	function provideAllBooks() {
		var books = BookStorage.getBooks();
		bookView.refreshBooks(books);
	}

	function provideMostPopularBooks() {
		bookView.refreshBooks(BookStorage.getMostPopularBooks());
	}

	function provideSearchBooks(keywords) {
		bookView.refreshBooks(BookStorage.getSearchedBooks(keywords));
	}

	function provideSearchMostPopularBooks(keywords) {
		bookView.refreshBooks(BookStorage.getSearchedMostPopularBooks(keywords));
	}

	function rateBooks(bookId, rating, filter) {
		BookStorage.rateBook(bookId, rating, filter);
	}

		function makeRequest(xhr, method, url, onreadystatechangeFunction) {
		xhr.open(method, url, true);

		xhr.onreadystatechange = onreadystatechangeFunction;

		xhr.send();
	}

	function setBooks() {
		var xhr = new XMLHttpRequest();

		makeRequest(xhr, 'GET', 'getBooks', function () {
			if (xhr.readyState != 4) {
				return;
			}

			if (xhr.status != 200) {
				console.log(xhr.status + ': ' + xhr.statusText);
			} else {
				BookStorage.setBooks(JSON.parse(xhr.responseText));
				bookView.refreshBooks(BookStorage.getBooks());
			}
		});
	}

	function addNewBook(title, author, cover) {
		BookStorage.addBookToBookStorage(title, author, cover);
	}

	function clearNotification() {
		var timeoutId = setTimeout(function () {
			currentNotifications.shift();
			clearTimeout(timeoutId);
		}, 3000);
	}

	function addNotification(type) {
		NotificationStorage.addNotification(type, new Date(), arguments);

		var notifications = NotificationStorage.getNotifications();

		currentNotifications.push(notifications[notifications.length - 1]);
		clearNotification();

		notificationView.refreshNotifications(currentNotifications);
	}

	function refreshNotifications() {
		notificationView.refreshNotifications(currentNotifications);
	}

	setBooks();

	return {
		provideAllBooks: provideAllBooks,
		provideMostPopularBooks: provideMostPopularBooks,
		provideSearchBooks: provideSearchBooks,
		provideSearchMostPopularBooks: provideSearchMostPopularBooks,
		rateBooks: rateBooks,
		addNewBook: addNewBook,
		addNotification: addNotification,
		refreshNotifications: refreshNotifications
	}
})();
