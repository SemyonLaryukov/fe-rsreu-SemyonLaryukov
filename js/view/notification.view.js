var notificationView = (function (libraryController) {
	'use strict';

	function initialize() {
		displayNotifications();
	}

	/* Notifications Section */

	function clearNotifications() {
		document.querySelector('.sidebar__history').innerHTML = '';
	}

	function displayNotifications() {
		clearNotifications();

		for (var i = 0; i < libraryController.getNotifications().length; i++) {
			switch (libraryController.getNotifications()[i].tag) {
				case 'add':
					createAddNotificationHTML(libraryController.getNotifications()[i]);
					break;
				case 'filter':
					createFilterNotificationHTML(libraryController.getNotifications()[i]);
					break;
				case 'search':
					createSearchNotificationHTML(libraryController.getNotifications()[i]);
					break;
				case 'rating':
					createRatingNotificationHTML(libraryController.getNotifications()[i]);
					break;
				default:
					break;
			}
		}
	}

	function createAddNotificationHTML(Notification) {
		var notificationHTML = '<div class="history__entry">\
            <span class="history__clock-icon">\
            <i class="fa fa-clock-o" aria-hidden="true"></i>\
            </span>\
            <span class="history__text">\
                You added <a href="#" class="history__link">' + Notification.title + '</a>\
                by <a href="#" class="history__link">' + Notification.author + '</a>\
                to your <a href="#" class="history__link">' + Notification.filter + '</a>.\
            </span>\
            <div class="history__time">\
            ' + libraryController.timeSince(Notification.time) +
			'</div></div>';

		document.querySelector('.sidebar__history').innerHTML += notificationHTML;
	}

	function createFilterNotificationHTML(Notification) {
		var notificationHTML = '<div class="history__entry">\
            <span class="history__clock-icon">\
            <i class="fa fa-clock-o" aria-hidden="true"></i>\
            </span>\
            <span class="history__text">\
                You filtered <a href="#" class="history__link">' + Notification.filter + '</a>\
            </span>\
            <div class="history__time">\
            ' + libraryController.timeSince(Notification.time) +
			'</div></div>';

		document.querySelector('.sidebar__history').innerHTML += notificationHTML;
	}

	function createSearchNotificationHTML(Notification) {
		var notificationHTML = '<div class="history__entry">\
            <span class="history__clock-icon">\
            <i class="fa fa-clock-o" aria-hidden="true"></i>\
            </span>\
            <span class="history__text">\
                You searched for <a href="#" class="history__link">' + Notification.search + '</a>\
            </span>\
            <div class="history__time">\
            ' + libraryController.timeSince(Notification.time) +
			'</div></div>';

		document.querySelector('.sidebar__history').innerHTML += notificationHTML;
	}

	function createRatingNotificationHTML(Notification) {
		var notificationHTML = '<div class="history__entry">\
            <span class="history__clock-icon">\
            <i class="fa fa-clock-o" aria-hidden="true"></i>\
            </span>\
            <span class="history__text">\
                You rated <a href="#" class="history__link">' + Notification.title + '</a>\
                by <a href="#" class="history__link">' + Notification.author + '</a>\
                with <a href="#" class="history__link">' + Notification.rating + '</a>.\
            </span>\
            <div class="history__time">\
            ' + libraryController.timeSince(Notification.time) +
			'</div></div>';

		document.querySelector('.sidebar__history').innerHTML += notificationHTML;
	}

	return {
		initialize: initialize,
		displayNotifications: displayNotifications,
		clearNotifications: clearNotifications,
		createAddNotificationHTML: createAddNotificationHTML,
		createFilterNotificationHTML: createFilterNotificationHTML,
		createSearchNotificationHTML: createSearchNotificationHTML,
		createRatingNotificationHTML: createRatingNotificationHTML
	}
})(libraryController);
