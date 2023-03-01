"use strict";

let id = Symbol("id");
let id2 = Symbol("id");
let id3 = id;
let flag = (id == id2);
alert(flag);

// alert(id2); // ошибка преобразования символа в строку

alert(id3 == id);

alert( id3.toString() );

let aidi = Symbol("aidi");

let user = {
	name: "Вася",
	[id]: 123
};

for (let key in user) {
	alert(key);
}

let cloneUser = Object.assign({}, user);

for (let key in cloneUser) {
	alert(key);
}

alert(cloneUser[id]);


let id4 = Symbol.for("id4");
let id4a = Symbol.for("id4");
alert( id4 == id4a );
alert( Symbol.keyFor(id4) );