function countBs(string) {
	var numberOfBs = 0;
	for (var count = 0; count < string.length; count++) {
		if (string.charAt(count) == "B")
			numberOfBs++;
	}
	return numberOfBs;
}

console.log(countBs("BBC"));
