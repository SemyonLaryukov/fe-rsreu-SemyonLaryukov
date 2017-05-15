var Context = (function (Utils) {
	'use strict';

	function Calculator() {
		this.result = 0;

		this.getResult = function () {
			return console.log(this.result);
		};

		this.add = function () {
			for (var i = 0; i < arguments.length; i++) {
				if (!utils.isNumber(arguments[i])) {
					throw new Error('Неверное значение');
				}

				this.result += arguments[i];
			}

			return this;
		};

		this.subtract = function () {
			for (var i = 0; i < arguments.length; i++) {
				if (!utils.isNumber(arguments[i])) {
					throw new Error('Неверное значение');
				}

				this.result -= arguments[i];
			}

			return this;
		};

		this.divide = function () {
			for (var i = 0; i < arguments.length; i++) {
				if (!utils.isNumber(arguments[i])) {
					throw new Error('Неверное значение');
				}

				this.result /= arguments[i];
			}

			return this;
		};

		this.multiply = function () {
			for (var i = 0; i < arguments.length; i++) {
				if (!utils.isNumber(arguments[i])) {
					throw new Error('Неверное значение');
				}

				this.result *= arguments[i];
			}

			return this;
		};

		this.reset = function () {
			this.result = 0;

			return this;
		};

		this.getInitialState = function (callback) {
			setTimeout(function () {
				this.result = 5;
				callback.call(this);
			}.bind(this), 500);
		}
	}

	var calculator = new Calculator();

	calculator.add(5).reset().add(4).multiply(2).subtract(5).divide(1).getResult(); // 3

	var callback = function () {
		console.log('запрос выполнен');
		console.log(this.result);
	};

	calculator.getInitialState(callback); // 5

}(Utils));
