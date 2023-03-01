"use strict";

let message;

/*
if (login == 'Сотрудник') {
	message = 'Привет';
} else if (login == 'Директор') {
	message = 'Здравствуйте';
} else if (login == '') {
	message = 'Нет логина';
} else {
	message = '';
}
*/

// Решение 
let login = prompt("Введите логин.", "");

message = (login == 'Сотрудник') ? 'Привет' : 
	(login == 'Директор') ? 'Здравствуйте' : 
	(login == '') ? 'Нет логина' : '';

alert(message);