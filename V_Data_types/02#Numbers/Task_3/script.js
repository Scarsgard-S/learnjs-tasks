"use strict";


function readNumber() {
	let x;

	do {
		x = prompt("Введите число", "");
	} while ( !isFinite(x) );

	if (x === null || x === "") return null;

	return +x;
}

alert( readNumber() );