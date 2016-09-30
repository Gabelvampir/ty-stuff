function reverseArrayInPlace(inputArray) {
	for (var count = 0; count < Math.floor(inputArray.length/2); count++) {
		var temp = inputArray[count];
		inputArray[count] = inputArray[inputArray.length - 1 - count];
		inputArray[inputArray.length - 1 - count] = temp;
	}
	return inputArray;
}

console.log(reverseArrayInPlace([1,2,3]));
