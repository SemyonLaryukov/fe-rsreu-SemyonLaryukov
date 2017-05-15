(function () {
	'use strict';

	var menu = document.querySelectorAll('li');
	var button = document.getElementById('button');

	for (var i = 0; i < menu.length - 1; i++) {
		menu[i].style.cssText = 'width: 100px;' +
			'height: 0px;' +
			'text-align: center;' +
			'color: white;' +
			'line-height: 30px;' +
			'background-color: #08b2eb;' +
			'overflow: hidden';
	}

	ul.style.listStyleType = 'none';

	button.style.width = '100px';
	button.style.height = '30px';
	button.style.textAlign = 'center';
	button.style.color = 'white';
	button.style.lineHeight = '30px';
	button.style.backgroundColor = '#08b2eb';
	button.style.borderTop = '5px solid #969696';
	button.style.borderRadius = '0px 0px 15px 15px';


	function showList() {
		if (menu[0].style.height === '0px') {
			for (var i = 0; i < menu.length - 1; i++) {
				menu[i].style.height = '30px';
			}
		} else {
			for (var i = 0; i < menu.length - 1; i++) {
				menu[i].style.height = '0px';
			}
		}
	}

	function buttonShadow() {
		button.style.cursor = 'pointer';
		button.style.boxShadow = '0px 4px 20px 1px #08b2eb';
	}

	function buttonDisableShadow() {
		button.style.boxShadow = 'none';
	}

	function listHover(menuItem) {
		return function () {
			menuItem.style.backgroundColor = '#0b95c3';
		};
	}

	function listHoverOut(menuItem) {
		return function () {
			menuItem.style.backgroundColor = '#08b2eb';
		};
	}

	button.addEventListener('click', showList);
	button.addEventListener('mouseover', buttonShadow);
	button.addEventListener('mouseout', buttonDisableShadow);
	for (var i = 0; i < menu.length - 1; i++) {
		menu[i].addEventListener('mouseover', listHover(menu[i]));
		menu[i].addEventListener('mouseout', listHoverOut(menu[i]));
	}
}());
