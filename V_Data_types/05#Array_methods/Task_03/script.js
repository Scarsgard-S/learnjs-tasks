"use strict";

function filterRangeInPlace(arr, a, b) {
	for (let i = 0; i < arr.length; i++) {
		if ( arr[i] < a || arr[i] > b ) {
			arr.splice(i, 1);
			i--;
		}
	}
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

alert( arr ); // [3, 1]

/* Второй вариант (но не проходит все тесты)
function filterRangeInPlace(arr, a, b) {
  arr.forEach((item, index) => {
    if (item < a || item > b) {
      arr.splice(index, 1);
    }
  });
  return arr;
}
*/