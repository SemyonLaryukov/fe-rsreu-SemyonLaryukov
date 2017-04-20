'use strict';
var userFirstName = 'Semyon';
var userLastName = 'Laryukov';
console.log(userFirstName + ' ' + userLastName);

function isNumber(num) {
	return isFinite(num) && num === parseInt(num, 10);
}

var triangleArea = function (side1, side2, side3) {
	if (isNumber(side1) && isNumber(side2) && isNumber(side3)) {
		var p = (side1 + side2 + side3) / 2;

		return Math.sqrt(p * (p - side1) * (p - side2) * (p - side3));
	} else {
		throw new Error('Неверный тип');
	}
}

console.log('Площадь треугольника ' + triangleArea(3, 4, 5));

var cities = ['Ryazan', 'Moscow', 'Paris'];

function reverseArrrayWhile(a) {
	if (Array.isArray(a)) {
		var start = 0;
		var end = a.length - 1;

		while (start <= end) {
			var temp = a[start];
			a[start] = a[end];
			a[end] = temp;
			start++;
			end--;
		}

		return a;
	}
	throw new Error('Неверный тип');
}

console.log(reverseArrrayWhile(cities));

function reverseArrrayFor(a) {
	if (Array.isArray(a)) {
		var counter = a.length - 1;

		for (var i = 0; i < a.length; i++) {
			var temp = a[i];

			a[i] = temp;
			counter--;
		}

		return a;
	}
	throw new Error('Неверный тип');
}

console.log(reverseArrrayFor(cities));

var increment = 100;
// 100
console.log(increment++);
// 101
console.log(increment);
increment = 100;
// 101
console.log(++increment);
// 101
console.log(increment);

function checkNumber(num) {
	if (isNumber(num)) {
		if (num = 0) {
			return 'Ноль';
		} else {
			if (num < 0) {
				return 'Отрицательное';
			} else {
				return 'Положительное';
			}
		}
	} else {
		throw new Error('Неверный тип');
	}
}

console.log(checkNumber(0));

var userName = prompt("Ваше имя?");

console.log('Имя пользователя ' + userName);

function calculateFactorial(num) {
	if (isNumber(num)) {
		if (num === 0) {
			return 1;
		} else {
			return num * calculateFactorial(num - 1);
		}
	} else {
		throw new Error('Неверный тип')
	}
}

console.log('Факториал = ' + calculateFactorial(1));
