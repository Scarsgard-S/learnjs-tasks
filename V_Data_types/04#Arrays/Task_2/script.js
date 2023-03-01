"use strict";

let style = ["Джаз", "Блюз"];
// alert(style);
style.push("Рок-н-ролл");
// alert(style);
style[Math.floor((style.length - 1) / 2)] = "Классика";
// alert(style);
alert( style.shift() );
style.unshift("Рэп", "Регги");
// alert(style);