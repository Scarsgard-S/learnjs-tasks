"use strict";

let user = { age: 19 };
let visitor = user;
visitor.age = 20;
console.log(user.age);

console.log( user === visitor );

let _ = {
	name: "Kallin",
	age: 25
};
let __ = {};
for (let ___ in _) {
	__[___] = _[___];
}
__.name = "Peter";
console.log(_.name);
console.log(__.name);

let a = { name: "Alpha"};
let b = { city: "Belfest"};
let c = { language: "Australian"};
Object.assign(a, b, c);
for (let key in a) {
	console.log(key);
	console.log(a[key]);
}

let clone = Object.assign({}, user);
console.log(clone.age);

let object1 = {
	value1: {
		value2: 2,
		value3: 3
	},
	value4: 5
}
let sClone = structuredClone(object1);
for (let key in sClone) {
	console.log(key);
	console.log(sClone[key]);
}