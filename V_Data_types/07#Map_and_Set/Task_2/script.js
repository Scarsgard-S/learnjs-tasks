"use strict";

function aclean(arr) {
  let resultArr = [];
  let wordsSet = new Set();

  for (let i = 0; i < arr.length; i++) {
    let sorted = arr[i].toLowerCase().split("").sort().join("");
    wordsSet.add(sorted);
  }

  for (let word of wordsSet) {
    let original = arr.find(el => el.toLowerCase().split("").sort().join("") === word);
    resultArr.push(original);
  }

  return resultArr;
}
/* Второй вариант
function aclean(arr) {
  let resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    let sorted = arr[i].toLowerCase().split("").sort().join("");

    if (!resultArr.includes(sorted)) {
      resultArr.push(sorted);
    }
  }

  for (let i = 0; i < resultArr.length; i++) {
    let original = arr.find(word => {
      return word.toLowerCase().split("").sort().join("") === resultArr[i];
    });
    resultArr[i] = original;
  }

  return resultArr;
}
*/

/* Третий вариант
function aclean(arr) {
	let map = new Map();

	for (let word of arr) {
		let sorted = word.toLowerCase().split("").sort().join("");
		map.set(sorted, word);
	}

	return Array.from(map.values());
}
*/

let arr = ["nap", "teachers", "cheaters", 
	"PAN", "ear", "era", "hectares"];

alert( aclean(arr) );

