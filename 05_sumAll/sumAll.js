const sumAll = function(start, end){
	//check if start and end are numbers
	if(typeof start !== 'number' || typeof end !== 'number'){
		return "ERROR";
	}
	
	//check if either start or end is negative
	if(start < 0 || end < 0) {
	return "ERROR";
	}

	//swap start and end if start is greater than end
	
	if(start > end){
		const temp = start;
		start = end;
		end = temp;
	// or	[start, end] = [end, start];
	}


	let sum = 0;
	for(let i = start; i <= end; i++){
		sum += i;
	}
	return sum;

};

// Do not edit below this line
module.exports = sumAll;
