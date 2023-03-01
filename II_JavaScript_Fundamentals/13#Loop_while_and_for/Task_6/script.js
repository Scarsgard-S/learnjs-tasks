"use strict";

// Вариант 1
let inputNumber;

while (true) {
	inputNumber = prompt("Введите число больше 100", "")
	if (inputNumber > 100) {
		alert(`Ваше число ${inputNumber} подходит`);
		break;
	} else if (inputNumber == null || inputNumber == "") {
		break;
	} else {
		inputNumber = prompt("Введите число ещё раз", "");
		if (inputNumber > 100) {
		alert(`Ваше число ${inputNumber} подходит`);
		break;
		} else if (inputNumber == null || inputNumber == "") {
			break;
		}
	}
}

// Вариант 2
let inputValue;

do {
	inputValue = prompt("Введите число больше 100!", "");
} while (inputValue <= 100 && inputValue);
// Если inputValue == "" || inputValue == null,
// то цикл завершается