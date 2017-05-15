(function () {
	'use strict';

	function Tag(tag, idName, innerHTML) {
		var elem = document.createElement(tag);
		elem.id = idName || '';
		elem.innerHTML = innerHTML || '';

		return elem;
	}

	var wrapper = new Tag('div', 'wrapper', null);
	var main = new Tag('main', 'main', null);
	var header = new Tag('header', 'header', 'Header');
	var arrow = new Tag('div', 'arrow', null);
	var content = new Tag('div', 'content', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Perferendis maxime porro itaque vitae inventore laudantium, numquam eos consectetur quidem minus, illo.Molestias optio dignissimos tenetur temporibus animi rerum placerat sed.');

	document.body.appendChild(wrapper);
	wrapper.appendChild(main);
	main.appendChild(header);
	main.appendChild(arrow);
	main.appendChild(content);
}());
