"use strict";

function ucFirst(str) {
	if (str === null || str === "") return str;

	return str.at(0).toUpperCase() + str.slice(1);
}

alert( ucFirst("марина") );
