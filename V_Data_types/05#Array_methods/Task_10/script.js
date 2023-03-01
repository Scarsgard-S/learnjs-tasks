"use strict";

let arr = [1, 2, 3];

function shuffle(array) {
	for(let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1) );
		[array[i], array[j]] = [array[j], array[i]];
	}
}

// Подсчёт вероятности для всех возможных вариантов
let count = {
  '123': 0,
  '132': 0,
  '213': 0,
  '231': 0,
  '321': 0,
  '312': 0
};

for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  shuffle(array);
  count[array.join('')]++;
}

// Показать количество всех возможных вариантов
for (let key in count) {
  alert(`${key}: ${count[key]}`);
}

/* Неправильный вариант
function randUnit() {
	let min = -1;
	let max = 1;
	let result = Math.random() * (max - min + 1) + min;
	return Math.floor(result);
}

function shuffle(array) {
	array.sort( (a, b) => randUnit() );
	return array;
}
*/