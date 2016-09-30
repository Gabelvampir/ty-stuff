function arrayToList(array) {
    var list = {value: array[array.length-1], rest: null};
    for (var count = array.length-2; count>=0; count--) {
        list = {value:array[count], rest: list};
    }
    return list;
}   

function prepend(element, list){
    return {value: element, rest: list};
}

function listToArray(list) {
	var array = [];
	for (var node = list; node; node = node.rest) {
		array.push(node.value);
	}
	return array;
}

function nth(list, n) {
	if (n == 0) {
		return list.value;
	}
	else if (n < 0) {
		return undefined;
	}
	else {
		return nth(list.rest, n - 1);
	}
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
