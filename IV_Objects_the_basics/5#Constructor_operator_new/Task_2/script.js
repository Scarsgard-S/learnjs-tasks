"use_strict";

function Calculator() {

	this.read = function() {
		this.value1 = +prompt("Value1?", "");
		this.value2 = +prompt("Value2?", "");
	};

	this.sum = function() {
		return (this.value1 + this.value2);
	};
	
	this.mul = function() {
		return (this.value1 * this.value2);
	}

}


let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );