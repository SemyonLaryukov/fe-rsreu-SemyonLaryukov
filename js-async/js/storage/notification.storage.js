var NotificationStorage = (function () {
	'use strict';

	var staticId = 0;
	var notifications = [];

	function addNotification(type, time) {
		if (notifications.length > 4) {
			notifications.shift();
		}

		if (type === 'addBook') {
			notifications.push(new NotificationAddBook('notification-' + staticId++, type, time, arguments[2][1], arguments[2][2]));
		} else if (type === 'filter') {
			notifications.push(new NotificationFilter('notification-' + staticId++, type, time, arguments[2][1]));
		} else if (type === 'search') {
			notifications.push(new NotificationSearch('notification-' + staticId++, type, time, arguments[2][1]));
		} else if (type === 'rating') {
			notifications.push(new NotificationRating('notification-' + staticId++, type, time, arguments[2][1], arguments[2][2]));
		} else {
			throw new Error('undefined type');
		}
	}

	function getNotifications() {
		return notifications;
	}

	return {
		addNotification: addNotification,
		getNotifications: getNotifications
	};
})();
