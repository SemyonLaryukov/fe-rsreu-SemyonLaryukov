var Utils = (function () {
	'use strict';

	function isNumber(input) {
		return !isNaN(parseFloat(input)) && isFinite(input);
	}

	return {
		isNumber: isNumber
	};
}());
