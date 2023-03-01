"use strict";

function getMaxSubSumN2(array) {
	let maxSum = 0;

	for (let i = 0; i < array.length; i++) {
		let subSum = 0;
		for (let j = i; j < array.length; j++) {
			subSum += array[j];
			maxSum = Math.max(maxSum, subSum);
		}
	}

	// Если сумма меньше нуля, то возвращается 0
	return maxSum;
}

alert( getMaxSubSumN2([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSumN2([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSumN2([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSumN2([1, 2, 3]) ); // 6
alert( getMaxSubSumN2([100, -9, 2, -3, 5]) ); // 100
alert( getMaxSubSumN2([-1, -2, -3]) ); // 0

// Быстрый алгоритм на N итераций
function getMaxSubSumN(array) {
	let maxSumN = 0;
	let subSumN = 0;

	for (let element of array) {
		subSumN += element;
		maxSumN = Math.max(maxSumN, subSumN);
		if (subSumN < 0) subSumN = 0;
	}
	return maxSumN;
}

alert( getMaxSubSumN([-1, 2, 3, -1, 11]) ); // 15
alert( getMaxSubSumN([-1, -2, -3]) ); // 0