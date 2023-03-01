"use strict";

let clients = {
	name: "Evgenii",
	spentMoney: 300,
	surname: "Makarov",
	salary: 3000,

	[Symbol.toPrimitive](hint) {
		// alert(`hint: ${hint}`);
		return hint == "string" ? `name: "${this.name}"` : this.spentMoney; 
		},

	toString() {
		return `{name: ${this.surname}}`;
	},

	valueOf() {
		return this.salary;
	},

	remainder() {
		return (this.salary - this.spentMoney);
	}
};

alert(clients); // name: "Evgenii"
alert(+clients); // 300
alert(clients - 0.05*clients); // 285
alert(clients + 500); // 800

console.log( clients.toString() ); //{name: Makarov}
console.log( clients.valueOf() ); // 3000

alert( clients.remainder() ); // 2700