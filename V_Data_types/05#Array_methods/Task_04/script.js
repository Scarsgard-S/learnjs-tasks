"use strict";

function sortArr(arr) {
	return arr.sort( (a, b) => (b - a) );
}

let arr = [5, 2, 1, -10, 8];

// ... ваш код для сортировки по убыванию
sortArr(arr);

alert( arr ); // 8, 5, 2, 1, -10
