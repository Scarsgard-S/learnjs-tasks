"use strict";

function unique(arr) {
  let newStrings = [];
  
  for (let i = 0; i < arr.length; i++) {
    let isUnique = true;
    for (let j = 0; j < newStrings.length; j++) {
      if (arr[i] === newStrings[j]) {
        isUnique = false;
      }
    }
    if (isUnique) {
      newStrings.push(arr[i]);
    }
  }
  return newStrings; 
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) );

/* Второй способ
	function unique(arr) {
		return Array.from(new Set(arr));
	}
*/

/* Третий способ
	function unique(arr) {
		let result = [];

		for (let str of arr) {
			if(!result.includes(str)) {
				result.push(str);
			}
		}

		return result;
	}
*/