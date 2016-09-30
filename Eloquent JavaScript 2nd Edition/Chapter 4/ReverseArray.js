function reverseArray(inputArray) {
	var outputArray = [];
	for (var count = 0; count < inputArray.length; count++) {
		outputArray.unshift(inputArray[count]);
	}
	return outputArray;
}

console.log(reverseArray([1,2,3]));
