const reverseString = function(word) {

	let splitarray = word.split("");
		//we first split the the string into single characters
	let reversestr = splitarray.reverse();
		// reverse all the arrayof characters from the back
	let strjoin = reversestr.join("");
		//then join all the characters in strings reversed
	return strjoin;
};
// or we can simply use this code shortly
//
// let splitarray = word.spit("").reverse().join("");

// Do not edit below this line
module.exports = reverseString;
