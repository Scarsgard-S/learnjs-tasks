"use strict";

let menu = {
	width: 200,
	height: 300,
	title: "My menu"
};

let multiplyNumeric = (obj) => {
	for (let key in obj) {
		if (typeof( obj[key] ) == 'number') {
			obj[key] *= 2;
		}
	}
}

multiplyNumeric(menu);

/*
for (let key in menu) {
	alert(key);
	alert(menu[key]);
}
*/