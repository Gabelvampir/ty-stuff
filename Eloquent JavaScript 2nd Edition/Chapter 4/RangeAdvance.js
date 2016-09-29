function range(start, end, step) {
	var rangeArray = [];
	for (var count = start; count <= end; count = count + step) {
		rangeArray.push(count);
	}
	return rangeArray;
}

console.log(range(1, 10, 2));
console.log(range(5, 2, -1));
