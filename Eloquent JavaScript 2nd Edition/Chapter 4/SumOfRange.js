function range(start, end) {
	var rangeArray = [];
	for (var count = start; count <= end; count++) {
		rangeArray.push(count);
	}
	return rangeArray;
}

function sum(array) {
	var endSum = 0;
	for (var count = 0; count < array.length; count++) {
		endSum = endSum + array[count];
	}
	return endSum;
}

console.log(sum(range(1, 10)));
