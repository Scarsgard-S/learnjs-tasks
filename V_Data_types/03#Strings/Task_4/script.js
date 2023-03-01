"use strict";

function extractCurrencyValue(str) {
	return isNaN(parseInt(str)) ? parseInt(str.slice(1)) : parseInt(str);
}

alert( extractCurrencyValue("$120") === 120 );
alert( extractCurrencyValue("120$") === 120 );