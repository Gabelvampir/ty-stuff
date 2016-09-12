var size = 0;
var board = "";
var prompt = require('prompt');

prompt.start();

prompt.get(['size'], function (err, result) {
	if (err) {
		return onErr(err);
	}
	size = Number(result.size);
});

function onErr(err) {
	console.log(err);
	return 1;
}

for (var outercount = 1; outercount <= size; outercount++) {
	for (var innercount = 1; innercount <= size; innercount++) {
		//odd fields in odd rows are #s, in even rows " "s
		if (innercount % 2 == 1) {
			if (outercount % 2 == 1) {
				board = board + "#";
			}
			else board = board + " ";
		}
		//even fields in odd rows are " "s, in even rows #s
		else if (innercount %2 == 0){
			if (outercount % 2 == 1) {
				board = board + " ";
			}
			else board = board + "#";
		}
		//if we reached end of row we need to insert newline
		if (innercount == size) {
			board = board + "\n";
		}
	}
}
console.log(board);
