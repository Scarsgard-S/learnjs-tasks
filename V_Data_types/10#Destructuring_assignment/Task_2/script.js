"use strict";

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries) {
	let maxSal = 0;
	let name;

	for (let [key, value] of Object.entries(salaries)) {
		if (value > maxSal) {
			maxSal = value;
			name = key;
		}
	}

	return name || null;
}

alert( topSalary(salaries) );