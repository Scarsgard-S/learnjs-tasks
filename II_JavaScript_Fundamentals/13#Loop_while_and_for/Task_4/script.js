"use strict";

// Вариант 1
for (let i = 2; i <= 10; i++) {
	if (i % 2 == 0) {
		alert(i);
	}
}

// Вариант 2
for (let i = 2; i <= 10; i++) {
	if (i % 2 !== 0) continue;
	alert(i);
}