"use strict";

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

/* Первый вариант
function newObject(array) {
	let newArray = [];
	for (let i = 0; i < array.length; i++) {
		let newObject = {};
		newObject.fullName = array[i].name + " " + array[i].surname;
		newObject.id = array[i].id;
		newArray[i] = newObject;
	}
	return newArray;
}

// let usersMapped = newObject(users);
*/

//Второй вариант
let usersMapped = users.map( user => ({
	fullName: `${user.name} ${user.surname}`,
	id: user.id
}));

alert( usersMapped[0].id )
alert( usersMapped[0].fullName )
alert( usersMapped[1].id )
alert( usersMapped[1].fullName )