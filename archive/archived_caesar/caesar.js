const caesar = function(string, shift) {
	return string
	.split("")
	.map((char) => shiftChar(char, shift))
	.join("");
};

const codeset = (code) => (code < 97 ? 65 : 97);

const mod = (n, m) => ((n % m) + m) % m;

const shiftChar = (char, shift) => {
	const code = char.charCodeAt();
	
	if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)){
		return String.fromCharCode(
		mod(code + shift - codeset(code), 26) + codeset(code)
		);
	}
	return char;
};

// Do not edit below this line
module.exports = caesar;
