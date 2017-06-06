var Oop = (function () {
	"use strict";
	// TODO: Add getters and setters+
	// TODO: Use ES6 classes+
	function Shape(name, type) {
		var _type;
		var _name;

		this.getType = function () {
			return _type;
		};

		// TODO: Add validation+
		this.setType = function (type) {
			if (!Utils.isString(type)) {
				throw new Error('Incorrect data');
			}

			this._type = type;
		};

		this.name = name;
		this.setType(type);
	}

	Shape.prototype.getPerimetr = function () {
		return 0;
	};

	Shape.prototype.drawn = function () {
		console.log(this.name + ' is drawn');
	};

	class Shape2 {
		constructor(type) {
			this._type = type;
		}

		// TODO: Add getters and setters+
		setType(type) {
			if (!Utils.isString(type)) {
				throw new Error('Incorrect data');
			}

			this._type = type;
		}

		getType() {
			return this._type;
		}

		drawn() {
			console.log('${this.name} is drawn');
		}
	}

	const tri2 = new Shape('tri2', 'triangle');
	tri2.drawn();

	function Triangle(name, a, b, c) {
		Shape.call(this, name, 'triangle');

		this.a = a;
		this.b = b;
		this.c = c;
	}

	// TODO: Add Object.create()+
	Triangle.prototype = Object.create(Shape.prototype);
	Triangle.prototype.constructor = Triangle;

	Triangle.prototype.getPerimetr = function () {
		return console.log(this.a + this.b + this.c);
	};

	var tri = new Triangle('triangle', 6, 8, 10);
	tri.getType();
	tri.setType('recttri');
	tri.getType();
	tri.getPerimetr();
	tri.drawn();

	// TODO: Use Object.defineProperties() for getters and setters+
	function Square(type, a) {
		Shape.apply(this, arguments);

		Object.defineProperties(this, {
			perimeter: {
				get: function () {
					return a * 4;
				}
			},
			a: {
				get: function () {
					return a;
				},
				set: function (value) {
					a = value;
				}
			}
		})
	}

	// TODO: Use Object.create()+
	Square.prototype = Object.create(Shape.prototype);
	Square.prototype.constructor = Square;

	Square.prototype.draw = function () {
		console.log('Square is drawn');
	};


	function EgyptTriangle(name, a, b, c) {
		Triangle.call(this, name, "EgyptTriangle");

		this.a = a;
		this.b = b;
		this.c = c;
	}

	EgyptTriangle.prototype = Triangle.prototype;

	EgyptTriangle.prototype.isEgypt = function () {
		return console.log(this.a % 3 === 0 && this.b % 4 === 0 && this.c % 5 === 0);
	};

	var egt = new EgyptTriangle('egTriangle', 3, 4, 5);
	egt.getType();
	egt.getPerimetr();
	egt.drawn();
	egt.isEgypt();
}());
