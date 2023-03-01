"use strict";

function sumSalaries(salaries) {
	let sum = 0;

	if(Object.keys(salaries).length === 0) {
		return 0;
	}

	for (let value of Object.values(salaries)) {
		sum += value;
	}
	return sum;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) );