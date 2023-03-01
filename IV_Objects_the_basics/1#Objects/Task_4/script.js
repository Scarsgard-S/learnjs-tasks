"use strict";

let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130
};

let calcSum = function (obj) {
	let sum = 0;

	for ( let key in obj) {
		sum += obj[key];	
	}
	return sum;
}

let sumResult = calcSum(salaries);

alert(sumResult);