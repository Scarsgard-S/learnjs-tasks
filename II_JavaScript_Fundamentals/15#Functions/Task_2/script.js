"use strict";

let age = +prompt("Введите ваш возраст", "");


function checkAge(age) {
	if (age > 18) {
		return true;
	} else {
		return confirm('Родители разрешили?');
	}
}

checkAge(age);


function checkAge2(age) {
	return (age > 18) ? true : confirm("Родители разрешили?");	
}

checkAge2(age);


function checkAge3(age) {
	return (age > 18) || confirm("Родители разрешили?");
}

checkAge3(age);

