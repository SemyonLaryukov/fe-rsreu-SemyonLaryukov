var bookStorage = (function (Book) {
	'use strict';

	var COVERS_FOLDER_PATH = 'icons/';
	var MAX_RATING_VALUE = 5;

	var LibraryDB = [
    new Book(1, 'Jewels of Nizam', 'Geeta Devi', COVERS_FOLDER_PATH + '1.png', 5),
    new Book(2, 'Cakes & Bakes', 'Sanjeev Capoor', COVERS_FOLDER_PATH + '2.png', 5),
    new Book(3, 'Jamie\'s Kitchen', 'Jamie Oliver', COVERS_FOLDER_PATH + '3.png', 4),
    new Book(4, 'Inexpensive Family Meals', 'Simon Holst', COVERS_FOLDER_PATH + '4.png', 3),
    new Book(5, 'Paleo Slow Cooking', 'Chrissy Gower', COVERS_FOLDER_PATH + '5.png', 1),
    new Book(6, 'Cook Like an Italian', 'Tobie Puttock', COVERS_FOLDER_PATH + '6.png', 4),
    new Book(7, 'Suneeta Vaswani', 'Geeta Devi', COVERS_FOLDER_PATH + '7.png', 4),
    new Book(8, 'Jamie Does', 'Jamie Oliver', COVERS_FOLDER_PATH + '8.png', 5),
    new Book(9, 'Jamie\'s Italy', 'Jamie Oliver', COVERS_FOLDER_PATH + '9.png', 5),
    new Book(10, 'Vegetables Cookbook', 'Matthew Biggs', COVERS_FOLDER_PATH + '10.png', 2)
  ];

	return {
		maxRatingValue: MAX_RATING_VALUE,
		coversFolder: COVERS_FOLDER_PATH,
		LibraryDB: LibraryDB,
	}
})(Book);
