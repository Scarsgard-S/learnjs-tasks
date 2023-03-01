"use strict";

function getSecondsToday() {
	let date = new Date();
	let startOfToday = new Date(date.getFullYear(), 
		date.getMonth(), date.getDate(), 0, 0, 0);
	let resultTime = (date.getTime() - startOfToday.getTime()) / 1000;


	return Math.floor(resultTime);
}

alert( getSecondsToday() );