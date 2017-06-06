var Notification = (function () {
	'use strict';

	function Notification(id, title, author, filter, search, rating, time, tag) {
		this.id = id;
		this.title = title || null;
		this.author = author || null;
		this.filter = filter || null;
		this.search = search || null;
		this.rating = rating || null;
		this.time = time || null;
		this.tag = tag;
	}

	return Notification;
})();
