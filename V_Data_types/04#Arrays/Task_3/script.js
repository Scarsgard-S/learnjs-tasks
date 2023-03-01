"use strict";

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // ?
/* Выведет элементы массива
 a, b function() {
	alert( this );
}
*/