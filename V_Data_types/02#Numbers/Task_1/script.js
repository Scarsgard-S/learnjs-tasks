"use strict";
// Возвращает количество символов после запятой
const f = x => ( (x.toString().includes('.')) ? (x.toString().split('.').pop().length) : (0) );

let firstNumber = +prompt("Введите первое число", "");
let secondNumber = +prompt("Введите второе число", "");
let maxPrecision = 0;
let result = 0;

if ( f(firstNumber) > f(secondNumber) ) {
	maxPrecision = f(firstNumber);
} else {
	maxPrecision = f(secondNumber);
}

result = (firstNumber + secondNumber).toFixed(maxPrecision);

// Отбрасывает нули, если результат целое число
if (result % 1 == 0) {
	result = Math.trunc(result);
}

alert( `Сумма двух чисел равна: ${result}` );