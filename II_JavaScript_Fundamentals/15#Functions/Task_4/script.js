"use strict";

let x = prompt("Введите x", "")
let n = prompt("Введите степень n", "");

function pow(x, n) {
	let result;

	if (n >= 1 && (n % 1 == 0)) {
		result = x ** n;
	} else return `Степень ${n} не поддерживается`

	return result;
}

alert(pow(x, n));
// alert(pow(3, 2));
// alert(pow(3, 3));
// alert(pow(1, 100));


/*
function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
  alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else { 
	// код попытается возвести в дробную степень,
	// но из-за округления будет неверный результат
  alert( pow(x, n) ); 
}
*/
