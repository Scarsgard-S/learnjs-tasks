"use strict";

let age = prompt("Введите age", "");

if ( (age >= 14) && (age <= 90) ) {
	alert(`age = ${age}`);
} else {
	alert("age не в диапозоне 14 <= age <= 90");
}