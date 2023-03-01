"use strict";

let fruits = ["Яблоки", "Груша", "Апельсин"];

let shoppingCart = fruits;
shoppingCart.push("Банан");

// Выведется 4
// Две переменные ссылками указывают на один массив
alert( fruits.length );