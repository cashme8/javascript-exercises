const getAge = function(birth, death) {
	if (!death) {
		death = new Date().getFullYear();
	}
	return death - birth;
};
const findTheOldest = function (people){
	return people.reduce((oldest, currentperson) => {
		const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
		const currentAge = getAge (
			currentperson.yearOfBirth,
			currentperson.yearOfDeath);
	return oldestAge < currentAge ? currentperson : oldest;
	});

};

// Do not edit below this line
module.exports = findTheOldest;
