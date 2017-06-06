// TODO: Add validation+
// TODO: Move to another file+
var Book = (function () {
	'use strict';

	function Book(id, title, author, coverPath, rating) {
		if (!Utils.isNumber(id) ||
			!Utils.isString(title) ||
			!Utils.isString(author) ||
			!Utils.isString(coverPath) ||
			!Utils.isNumber(rating)) {
			throw new Error('Incorrect data');
		}

		this.id = id;
		this.title = title;
		this.author = author;
		this.coverPath = coverPath;
		this.rating = rating;
	}

	return Book;
})();
