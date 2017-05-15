(function () {
	'use strict';

	function Tag(tag, idName, innerHTML, className = '') {
		var elem = document.createElement(tag);
		elem.id = idName;
		elem.innerHTML = innerHTML;
		elem.className = className;

		return elem;
	}

	var wrapper = new Tag('div', 'wrapper', null);
	var ul = new Tag('ul', 'ul', null);
	var li = [
    new Tag('li', 'menu1', 'menu1', 'menu'),
    new Tag('li', 'menu2', 'menu2', 'menu'),
    new Tag('li', 'menu3', 'menu3', 'menu'),
    new Tag('li', 'menu4', 'menu4', 'menu'),
    new Tag('li', 'menu5', 'menu5', 'menu'),
    new Tag('li', 'button', 'Top menu', 'menu')
  ];


	document.body.appendChild(wrapper);
	for (var i = 0; i < li.length; i++) {
		ul.appendChild(li[i]);
	}
	wrapper.appendChild(ul);

}());
