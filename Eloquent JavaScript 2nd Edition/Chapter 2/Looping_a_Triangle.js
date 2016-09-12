var printout = ""
for (var count = 1; count <= 7; count++) {
	while (printout.length < count) {
		printout = printout + "#";
	}
	console.log(printout);
}
