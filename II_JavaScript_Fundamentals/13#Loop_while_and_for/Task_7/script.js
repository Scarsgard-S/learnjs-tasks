"use strict";

// Вариант 1
let n = 13;

nextNumber: for (let i = 2; i <= n; i++ ) {
//alert(`i = ${i}`);
	for (let j = 2; j < i; j++) {
		//alert(`j = ${j}`);
		if (i % j == 0) continue nextNumber;
	}

	alert (i);
}


//Вариант 2
let m = 13;
let flag = true;

for (let i = 2; i <= m; i++) {
	for (let j = 2; j < i; j++) {

		if (i % j == 0) {
			flag = false;
		}

	}

	 if (flag == true) {
	 	alert(i);
	} else {
		flag = true;
	}

	// (flag == true) ? alert(i) : (flag = true);
}


