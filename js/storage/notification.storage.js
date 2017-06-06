var notificationStorage = (function (Notification) {
	'use strict';

	var NotificationDB = [
    new Notification(1, 'Jamie\'s Italy', 'Jamie Oliver', 'Library', null, null, new Date(2017, 4, 26, 12, 0, 30), 'add'),
    new Notification(2, 'Vegetables Cookbook', 'Matthew Biggs', 'Library', null, null, new Date(2017, 4, 26, 11, 10, 0), 'add')
  ];

	return {
		NotificationDB: NotificationDB
	};
})(Notification);
