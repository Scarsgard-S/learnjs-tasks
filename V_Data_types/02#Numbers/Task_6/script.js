"use strict";

function randomInteger(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	let result = Math.random() * (max - min + 1) + min;
	return Math.floor(result);
}

/*
alert( randomInteger(1, 5) );
alert( randomInteger(1, 5) );
alert( randomInteger(1, 5) );
*/

// Распределение случайное и равномерное
// Результат 1 - 1.99(9) == 1
// Результат 2 - 2.99(9) == 2
// Результат 3 - 3.99(9) == 3
// Результат 4 - 4.99(9) == 4
// Результат 5 - 5.99(9) == 5

let int1 = 0, 
		int2 = 0, 
		int3 = 0, 
		int4 = 0, 
		int5 = 0;

for (let i = 0; i < 1e6; i++) {
	let resultInt = randomInteger(1, 5);

	switch(resultInt) {
		case 1:
			int1 += 1;
			break;
		case 2:
			int2 += 1;
			break;
		case 3:
			int3 += 1;
			break;
		case 4:
			int4 += 1;
			break;
		case 5:
			int5 += 1;
			break;
	}
}


alert(`Число 1 выпало ${int1} раз`);
alert(`Число 2 выпало ${int2} раз`);
alert(`Число 3 выпало ${int3} раз`);
alert(`Число 4 выпало ${int4} раз`);
alert(`Число 5 выпало ${int5} раз`);
