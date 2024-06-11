<<<<<<< HEAD
const removeFromArray = function(array, ...num) {
 const newArray = [];
	array.forEach((item) => {
		if (!num.includes(item)){
			newArray.push(item);
		}
	});
	return newArray;
=======
const removeFromArray = function() {
>>>>>>> 2154dcec4a4917ef3879edea0e290b20f289537e
};

// Do not edit below this line
module.exports = removeFromArray;
