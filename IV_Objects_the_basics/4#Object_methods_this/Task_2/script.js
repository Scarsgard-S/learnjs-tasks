"use strict";

let calculator = {
	read () {
		this.value1 = prompt("Value1?", "");
		this.value2 = prompt("Value2?", "");
	},
	sum () {
		return (+this.value1 + +this.value2);
	},
	mul () {
		return (this.value1 * this.value2);
	}
}

calculator.read();
alert( calculator.sum() );
alert ( calculator.mul() );