function countBs(string) {
	return countChar(string, "B");
}

function countChar(string, char) {
	var numberOfChars = 0;
	for (var count = 0; count < string.length; count++) {
		if (string.charAt(count) == char)
			numberOfChars++;
	}
	return numberOfChars;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
