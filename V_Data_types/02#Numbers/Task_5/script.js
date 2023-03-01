"use strict";

function random(min, max) {
	let result = Math.random() * (max - min) + min;
	return result;
}

alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );