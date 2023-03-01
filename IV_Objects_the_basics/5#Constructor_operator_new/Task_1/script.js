"use strict";
/*
function A() { ... }
function B() { ... }

let a = new A();
let b = new B();

alert( a == b );
*/

// Да, возможно

let user = {};

function A() {
	return user;
}

function B() {
	return user;
}

let a = new A();
let b = new B();

alert( a == b );