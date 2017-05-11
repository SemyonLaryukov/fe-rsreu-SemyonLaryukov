(function () {
	'use strict';

	//1. Write a function which defines if a given value is a number. Use this function in the next tasks to define if a given value is a number;

	function isNumber(num) {
		return isFinite(num) && num === parseInt(num, 10);
	}

	console.log(isNumber("JavaScript")); // false
	console.log(isNumber(2)); // true

	//2. Write a function which defines if a given number is negative or not. Do not forget to check if the given value is a number. 

	function isNegative(num) {
		if (isNumber(num)) {
			return Boolean(num > 0);
		} else {
			throw new Error('Неверный тип');
		}
	}

	console.log(isNegative(2)); // false
	console.log(isNegative(-2)); // true

	//3. Write a function which defines if a given number is positive or not. Do not forget to check if the given value is a number. 

	function isPositive(num) {
		if (isNumber(num)) {
			return Boolean(num > 0);
		} else {
			throw new Error('Неверный тип');
		}
	}

	console.log(isPositive(2)); // true
	console.log(isPositive(-2)); // false

	//4. Write a function which calculates a factorial for a given number (use recursion in your algorithm). Do not forget to check if the given value is a number.

	function calculateFactorial(num) {
		if (isNumber(num)) {
			return (num === 0) ? 1 : num * calculateFactorial(num - 1);
		} else {
			throw new Error('Неверный тип');
		}
	}

	console.log('Факториал = ' + calculateFactorial(1));

	//5. Write a function which returns if the number is prime or not. Do not forget to check if the given value is a number. 

	function isPrime(n) {
		if (isNumber(n)) {
			if (n === 1) {
				return false;
			}

			for (var i = 2; i * i <= n; i++) {
				if (n % i == 0) {
					return false;
				}
			}

			return true;
		} else {
			throw new Error('Неверный тип');
		}
	}

	console.log(isPrime(5)); // true
	console.log(isPrime(12)); // false

	//1. Write a function which defines if a given value is a string. Use this function in the next tasks to define if a given value is a string;

	function isString(str) {
		return typeof str === 'string';
	}

	console.log(isString('JavaScript')); // true
	console.log(isString(2)); // false

	//2. Write a function which defines if a given value can be casted to a number; 

	function canTransformToNumber(str) {
		if (isString(str)) {
			return Boolean(!isNaN(parseFloat(str)));
		} else {
			throw new Error('Неверный тип');
		}
	}

	console.log(canTransformToNumber('2')); // true
	console.log(canTransformToNumber('text')); // false

	//3. Write a function which returns a given string length. Do not forget to check if the given value is a string; 

	function getStringLength(str) {
		if (isString(str)) {
			return str.length;
		} else {
			throw new Error('Неверный тип');
		}
	}

	console.log(getStringLength("JS ")); // 3

	//4. Write a JavaScript function to convert a string into camel case;

	function camelize(str) {
		if (isString(str)) {
			var arr = str.split(' ');

			for (var i = 1; i < arr.length; i++) {
				arr[i] = capitalize(arr[i]);
			}

			return arr.join('');
		} else {
			throw new Error('Неверный тип');
		}
	}

	console.log(camelize('Java Script')); // JavaScript

	// 5. Write a JavaScript function to capitalize the first letter of a string; 

	function capitalize(str) {
		if (isString(str)) {
			return str.charAt(0).toUpperCase() + str.slice(1);
		} else {
			throw new Error('Неверный тип');
		}
	}

	console.log(capitalize('javaScript')); // JavaScript

	// 6. Write a JavaScript function which return the number of occurrences of a given substring in a string.

	function findOccurrences(substr, str) {
		if (isString(str) && isString(substr)) {
			var substrings = str.split(substr);

			return substrings.length - 1;
		} else {
			throw new Error('Неверный тип');
		}
	}

	console.log(findOccurrences('a', 'JavaScript')); // 2
	console.log(findOccurrences('Ja', 'JavaScript')); // 1
	console.log(findOccurrences(' ', 'JavaScript')); // 0
	console.log(findOccurrences('b', 'JavaScript')); // 0

	// 1. Write a function which defines if a given value is an array. Use this function in the next tasks to define if a given value is an array; 

	function isArray(arr) {
		return Object.prototype.toString.call(arr) === '[object Array]';
	}

	console.log(isArray([])); // true
	console.log(isArray(2)); // false

	//2. Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array

	function filterArr(arr) {
		if (isArray(arr)) {
			var index = -1;
			var resIndex = -1;
			var result =

				while (++index < arr.length) {
					var value = arr[index];
					if (value) {
						result[++resIndex] = value;
					}
				}
			return result;
		} else {
			throw new Error('Неверный тип');
		}
	}

	console.log(filterArr([NaN, 0, 1, false, -2, "", undefined, 3, null]));

	//3. Write a JavaScript function to find the highest value in an array

	function maxArr(arr) {
		if (isArray(arr)) {
			var value = arr[0];

			for (var i = 1; i < arr.length; i++) {
				if (arr[i] > value) {
					value = arr[i];
				}
			}

			return value;
		} else {
			throw new Error('Неверный тип');
		}
	}

	console.log(maxArr([5, 7, -1, 1]));

	//4. Write a JavaScript function to find the lowest value in an array

	function minArr(arr) {
		if (isArray(arr)) {
			var value = arr[0];

			for (var i = 1; i < arr.length; i++) {
				if (arr[i] < value) {
					value = arr[i];
				}
			}

			return value;
		} else {
			throw new Error('Неверный тип');
		}
	}

	console.log(minArr([5, 7, -1, 1]));

	//5. Write a JavaScript function to split a string and convert it into an array of words;

	function strToArr(str) {
		if (isString(str)) {
			return str.trim().split(" ");
		} else {
			throw new Error('Неверный тип');
		}
	}

	console.log(strToArr("Semyon Laryukov"));

	//6. Write a JavaScript function to find the most frequent item of an array.

	function mostFreq(arr) {
		if (isArray(arr)) {
			var mf = 1;
			var m = 0;
			var item;

			for (var i = 0; i < arr.length; i++) {
				for (var j = i; j < arr.length; j++) {
					if (arr[i] == arr[j]) {
						m++;
					}
					if (mf < m) {
						mf = m;
						item = arr[i];
					}
				}
				m = 0;
			}

			return 'Элемент ' + item + ' встречается ' + mf + ' раз/раза';
		} else {
			throw new Error('Неверный тип');
		}
	}

	console.log(mostFreq([1, 2, 3, 4, 5, 5, 6]));

	//7. Write a JavaScript function to clone an array

	function arrayClone(arr) {
		if (isArray(arr)) {
			return arr.slice(0);
		} else {
			throw new Error('Неверный тип');
		}
	}

	console.log(arrayClone([1, 2, 3, 4]));

	//8. Write a JavaScript program to remove duplicate strings from a string array

	function removeDuplicates(arr) {
		if (isArray(arr)) {
			var x;
			var len = arr.length;
			var out = [];
			var obj = {};

			for (x = 0; x < len; x++) {
				obj[arr[x]] = 0;
			}

			for (x in obj) {
				out.push(x);
			}

			return out;
		} else {
			throw new Error('Неверный тип');
		}
	}

	console.log(removeDuplicates([1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6]));

	//9. Write a JavaScript function to merge two arrays and removes all duplicates elements

	function mergeArr(arr1, arr2) {
		if (isArray(arr1) && isArray(arr2)) {
			var arr = arr1.concat(arr2);
			var len = arr.length;
			var result = [];
			var out = [];
			var obj = {};

			for (x = 0; x < len; x++) {
				obj[arr[x]] = 0;
			}

			for (x in obj) {
				out.push(x);
			}

			return out;
		} else {
			throw new Error('Неверный тип');
		}
	}

	console.log(mergeArr([1, 2, 3], [1, 2, 4]));

	//10. Write a JavaScript function to remove a specific element from an array

	function removeArrElem(array, n) {
		if (isArray(array)) {
			var index = array.indexOf(n);
			if (index > -1) {
				array.splice(index, 1);
			}
			return array;
		} else {
			throw new Error('Неверный тип');
		}
	}

	console.log(removeArrElem([1, 2, 3, 4], 2));

	//11. Write a JavaScript function to sort the following array of objects by title value using ‘sort’ method

	var library = [
		{
			author: 'Bill Gates',
			title: 'The Road Ahead',
			libraryID: 1254
	},

		{
			author: 'Steve Jobs',
			title: 'Walter Isaacson',
			libraryID: 4264
	},

		{
			author: 'Suzanne Collins',
			title: 'Mockingjay: The Final Book of The Hunger Games',
			libraryID: 3245
	}
];

	function sortArrObj(x, y) {
		if (x.title < y.title) {
			return -1;
		}

		if (x.title > y.title) {
			return 1;
		}

		return 0;
	}

	console.log(library.sort(sortArrObj));

	//1. Write a JavaScript program to get the length of a JavaScript object
	// TODO Count inner objects length

	function objSize(obj) {
		var counter = 0;

		for (var key in obj) {
			counter++;

			if (obj[key] instanceof Object) {
				counter = counter + objSize(obj[key]);
			}
		}

		return counter;
	}

	var auto = {
		name: 'Hyundai',
		age: 5,
		newcar: {
			newname: 'newcar'
		}
	};

	console.log(objSize(auto));

	//2. Write a JavaScript program to list the properties of a JavaScript object

	function isObject(obj) {
		var type = typeof obj;

		return type === 'function' || type === 'object' && !!obj;
	}

	function objProp(obj) {
		if (!isObject(obj)) {
			throw new Error('Неверный тип');
		}

		if (Object.keys) {
			return Object.keys(obj);
		}

		var keys = [];

		for (var key in obj) {
			keys.push(key);
		}

		return keys;
	}

	console.log(objProp(auto));

	//1. Write a JavaScript function to get difference between two dates in days.

	function dateDiff(date1, date2) {
		dt1 = new Date(date1);
		dt2 = new Date(date2);

		return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24));
	}

	console.log(dateDiff('11/04/2017', '11/04/2016'));

	//2. Write a JavaScript function gets the current date.

	function currentDate(sp) {
		today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth() + 1;
		var yyyy = today.getFullYear();

		if (dd < 10) {
			dd = '0' + dd;
		}

		if (mm < 10) {
			mm = '0' + mm;
		}

		return (mm + sp + dd + sp + yyyy);
	}

	console.log(currentDate('.'));

	//3. Write a JavaScript function which displays the current day and time in the following format. 

	function formatDate(date) {
		var hours = date.getHours();
		var minutes = date.getMinutes();
		minutes = minutes < 10 ? '0' + minutes : minutes;
		var strTime = hours + ':' + minutes;
		var month = date.getMonth();
		var monList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

		return `${monList[month]}, ${date.getDate()} ${date.getFullYear()} ${strTime}`; //StringTemplate
	}

	console.log(formatDate(new Date()));

}());
