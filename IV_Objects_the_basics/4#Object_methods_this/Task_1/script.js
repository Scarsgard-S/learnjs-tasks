"use strict";

function makeUser() {
	return {
		name: "John",
		ref: this 
	};
}

let user = makeUser();

alert ( user.ref.name );
// Будет ошибка, this == undefined

// Правильный вариант

function makeUser() {
	return {
		name: "John",
		ref: function () {
			return this;
		}
	};
}

let user = makeUser();

alert( user.ref().name);