"use strict";

function getLocalDay(date) {
	let days = [1, 2, 3, 4, 5, 6, 7];
	let resultDay = date.getDay();

	if (resultDay == 0) resultDay = 7;

	return resultDay;
}

let date = new Date(2012, 0, 3);
alert( getLocalDay(date) );