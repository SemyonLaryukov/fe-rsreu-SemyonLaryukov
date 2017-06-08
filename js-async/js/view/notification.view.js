var notificationView = (function () {
	'use strict';

	function makeTimeString(oldTime) {
		var difference = new Date().getTime() - oldTime.getTime();
		var hours = Math.floor(difference / (1000 * 60 * 60)) === 0 ?
			'' : Math.floor(difference / (1000 * 60 * 60)) + ' hours <br>';
		var minutes = Math.floor(difference / (1000 * 60)) === 0 ?
			'' : Math.floor(difference / (1000 * 60)) % 60 + ' minutes <br>';

		return hours +
			minutes +
			Math.round(difference / 1000) % 60 + ' seconds <br>';
	}

	function createAddBookNotification(notification) {
		var timeString = makeTimeString(notification.time);

		return `
							<li id="${notification.id}">
								<div class="history-list-item"> 
									You added 
									<a href="#" class="title">${notification.title}</a> 
									by <a href="#" class="author">${notification.author}</a> 
									<span>${timeString} ago</span>
								</div>
							</li>
						`
	}

	function createFilterNotification(notification) {
		var timeString = makeTimeString(notification.time);

		return `
							<li id="${notification.id}">
								<div class="history-list-item"> 
									You filtered books 
									by <a href="#">${notification.criterion}</a> 
									<span>${timeString} ago</span>
								</div>
							</li>
						`
	}

	function createSearchNotification(notification) {
		var timeString = makeTimeString(notification.time);

		return `
							<li id="${notification.id}">
								<div class="history-list-item"> 
									You searched 
									<a href="#">${notification.keywords}</a> 
									<span>${timeString} ago</span>
								</div>
							</li>
						`
	}

	function createRatingNotification(notification) {
		var timeString = makeTimeString(notification.time);

		return `
							<li id="${notification.id}">
								<div class="history-list-item"> 
									You rated  
									<a href="#" class="title">${notification.title}</a> 
									to <a href="#">${notification.rating}</a>
									<span>${timeString} ago</span>
								</div>
							</li>
						`
	}

	function refreshNotifications(notifications) {
		var notificationsList = document.querySelector('.history-list ul');

		notificationsList.innerHTML = '';

		for (var i = notifications.length - 1; i >= 0; i--) {
			if (notifications[i] instanceof NotificationAddBook) {
				notificationsList.insertAdjacentHTML(
					'beforeEnd',
					createAddBookNotification(notifications[i])
				);
			} else if (notifications[i] instanceof NotificationFilter) {
				notificationsList.insertAdjacentHTML(
					'beforeEnd',
					createFilterNotification(notifications[i])
				);
			} else if (notifications[i] instanceof NotificationSearch) {
				notificationsList.insertAdjacentHTML(
					'beforeEnd',
					createSearchNotification(notifications[i])
				);
			} else if (notifications[i] instanceof NotificationRating) {
				notificationsList.insertAdjacentHTML(
					'beforeEnd',
					createRatingNotification(notifications[i])
				);
			} else {
				throw new Error('undefined type of notification');
			}
		}
	}

	setInterval(Controller.refreshNotifications, 1000);

	return {
		refreshNotifications: refreshNotifications
	};
})();
