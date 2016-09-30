function range(start, end, step) {
	var rangeArray = [];
	// calculate number of steps needed to reach end with step width
	var maxStep = (end - start) / step;
	var current = start;
	for (var count = 0; count <= maxStep; count++) {
		rangeArray.push(current);
		current = current + step;
	}
	return rangeArray;
}

console.log(range(1, 10, 2));
console.log(range(5, 2, -1));
