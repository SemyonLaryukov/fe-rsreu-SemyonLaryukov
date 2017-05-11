var Utils = (function () {
	'use strict';

	function isNumber(input) {

		return !isNaN(parseFloat(input)) && isFinite(input);
	}

	return {
		isNumber: isNumber;
	}
}());

var Calculator = (function (Utils) {
	'use strict';

	var result = 0;

	function getResult() {

		return result;
	}

	function add() {

		for (var i = 0; i < arguments.length; i++) {

			if (!Utils.isNumber(arguments[i])) {
				throw new Error('Неверное значение');
			}

			result += arguments[i];
		}

		return add;
	}

	function subtract() {

		for (var i = 0; i < arguments.length; i++) {

			if (!Utils.isNumber(arguments[i])) {
				throw new Error('Неверное значение');
			}

			result -= arguments[i];
		}

		return subtract;
	}

	function divide() {

		for (var i = 0; i < arguments.length; i++) {

			if (!Utils.isNumber(arguments[i])) {
				throw new Error('Неверное значение');
			}

			result /= arguments[i];
		}

		return divide;
	}

	function multiply() {

		for (var i = 0; i < arguments.length; i++) {

			if (!Utils.isNumber(arguments[i])) {
				throw new Error('Неверное значение');
			}

			result *= arguments[i];
		}

		return multiply;
	}

	function reset() {
		result = 0;

		return result;
	}

	return {
		getResult: getResult,
		add: add,
		subtract: subtract,
		divide: divide,
		multiply: multiply,
		reset: reset
	};

})(Utils);

Calculator.add(4);
Calculator.subtract(1);
console.log(Calculator.getResult());
Calculator.add(4, 5)(1);
console.log(Calculator.getResult());
console.log(Calculator.reset());
