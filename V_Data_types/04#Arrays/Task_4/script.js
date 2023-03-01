"use strict";

function sumInput() {
	let arr = [];
	let x;
	let sum = 0;

	while (1) {
		x = prompt("Введите число", "");

		if ( !isFinite(x) || x === "" || x === null ) break;
		
		arr.push(+x);
		sum += +x;

	}
return sum;
}

alert( sumInput() );