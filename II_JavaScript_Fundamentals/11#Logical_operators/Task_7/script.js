"use strict";

let age = prompt("Введите age", "");

if ( !((age >= 14) && (age <= 90)) ) {
	alert(`${age} не в диапозоне 14 <= age <= 90`);
} else {
	alert("age в диапозоне 14 <= age <= 90");

}

if ( age < 14 || age > 90 ) {
	alert(`${age} не в диапозоне 14 <= age <= 90`);
} else {
	alert("age в диапозоне 14 <= age <= 90");
}