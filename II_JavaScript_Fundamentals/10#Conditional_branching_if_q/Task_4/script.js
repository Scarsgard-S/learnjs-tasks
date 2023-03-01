"use strict";

let result;

let a, b = 2;

if (a + b < 4) {
	result = 'Мало';
} else {
	result = 'Много';
}

// Решение
result = (a + b < 4) ? 'Мало' : 'Много';

alert(result);