"use strict";

// Вариант 1
function getLastDayOfMonth(year, month) {
	if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
		let leapMonth = [0, 2, 4, 6, 7, 9, 11];
		let normalMonth = [3, 5, 8, 10];

		if (leapMonth.includes(month)) {
			return 31;
		} else if (normalMonth.includes(month)) {
			return 30;
		} else if (month == 1) {
			return 29;
		}

	} else return 28;
}

alert( getLastDayOfMonth(2012, 1) );

/* */