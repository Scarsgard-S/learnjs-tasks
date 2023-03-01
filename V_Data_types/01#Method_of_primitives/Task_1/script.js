"use strict";

let str = "Привет";

str.test = 5;

// не сработает, примитивы нельзя изменять
alert(str.test); 