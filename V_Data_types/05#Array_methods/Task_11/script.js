"use strict";

// Первый вариант
function getAverageAge(users) {
	let sum = 0;
	users.map( user => {
		sum += user.age;
	});
	return (sum / users.length);
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

alert (getAverageAge(arr));

/* Второй вариант
function getAverageAge(users) {
	return users.reduce((sum, user) => sum + user.age, 0) / users.length;
}
*/