"use strict";

function namesArray(array) {
	let namesArray = [];
	for (let i = 0; i < array.length; i++) {
		namesArray.push(users[i].name);
	}
	return namesArray;
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = namesArray(users);

alert( names ); // Вася, Петя, Маша

// Второй способ
// let names = users.map(user => user.name);