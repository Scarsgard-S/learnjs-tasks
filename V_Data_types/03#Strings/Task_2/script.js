"use strict";

function checkSpam(str) {
	let result = str.toLowerCase();
	
	return result.includes("viagra") || result.includes("xxx");
}

alert(checkSpam('buy ViAgRA now'));
alert(checkSpam('free xxxxx'));
alert(checkSpam("innocent rabbit"));
