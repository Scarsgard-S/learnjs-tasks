"use strict";

// Первый способ
function count(obj) {
	let sum = 0;

	for (let value of Object.keys(obj)) {
		sum ++;;
	}

	return sum;
}

/*
function coung(obj) {
	return Object.keys(obj).length;
}
*/

let user = {
  name: 'John',
  age: 30
};

alert( count(user) );