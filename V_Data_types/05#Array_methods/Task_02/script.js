"use strict";

function filterRange(arr, a, b) {
	let filterArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] >= a && arr[i] <= b) {
			filterArr.push(arr[i]);
		}
	}
	return filterArr;
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (совпадающие значения)

alert( arr ); // 5,3,8,1 (без изменений)

/* Второй способ
function filterRange(arr, a, b) {
  return arr.filter(item => item >= a && item <= b);
}
*/
