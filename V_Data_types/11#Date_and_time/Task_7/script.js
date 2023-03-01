"use strict";

function getSecondsToTomorrow() {
	let date = new Date();
	let startOfTomorrow = new Date(date.getFullYear(), 
		date.getMonth(), date.getDate() + 1, 0, 0, 0);
	let resultTime = (startOfTomorrow.getTime() - date.getTime()) / 1000;


	return Math.floor(resultTime);
}

alert( getSecondsToTomorrow() );