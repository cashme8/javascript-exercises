const palindromes = function (str) {
	//convert str to lowercase and remove non-alphabetical characters
	const cleanedstr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
	//compare the cleaned string with its reverse
	return cleanedstr === cleanedstr.split('').reverse().join('')

};

// Do not edit below this line
module.exports = palindromes;
