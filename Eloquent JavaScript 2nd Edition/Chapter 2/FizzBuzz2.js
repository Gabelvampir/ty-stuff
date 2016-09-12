for (var count = 1; count <= 100; count++) {
	if (count % 3 == 0) {
		if (count % 5 == 0) {
			console.log("FizzBuzz");
			continue;
		}
		else console.log("Fizz");
	}
	else if (count % 5 == 0) {
		console.log("Buzz");
	}
	else console.log(count);
}
