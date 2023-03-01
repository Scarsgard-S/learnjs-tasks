"use strict";

function truncate(str, maxLength) {
	if (str.length <= maxLength) {
		return str;
	} else {
		return str.slice(0, maxLength - 1) + "…";
	}
}

alert( truncate(`Вот, что мне хотелось бы 
	сказать на эту тему:`, 25) );