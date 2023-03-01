"use strict";

// Различий в поведении функций нет

let age1 = prompt("Введите ваш возраст 1", "");

function checkAge1(age) {
	if (age > 18) {
		return true;
	} else {
		// ...
		return confirm('Родители разрешили?');
	}
}

checkAge1(age1);


let age2 = prompt("Введите ваш возраст 2", "");

function checkAge2(age) {
	if (age > 18) {
		return true;
	}
	// ...
	return confirm('Родители разрешили?');
}

checkAge2(age2);