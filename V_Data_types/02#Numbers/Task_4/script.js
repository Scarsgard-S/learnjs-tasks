"use strict";

let i = 0;
while (i != 10) {
	
	i += 0.2;
	i = Math.round(i * 10) / 10;
	alert(i.toFixed(20));
}

// 0.2 не может быть представлено точно в 2-й с/сч
// Поэтому i никогда не станет равным 10
/*
let i = 0;
while (i != 10) {
  i += 0.2;
}
*/