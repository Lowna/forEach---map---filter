// write a function with forEach that doubles values

// the function accepts an argument array
function doubleValues(array) {
	// the newArray stores any number that will be doubled
	let newArray = [];
	//here is the forEach loop that doubles any value pushed into the loop
	array.forEach(function(val) {
		newArray.push(val + val);
	});
	//this returns the new array
	return newArray;
}
//Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
function onlyEvenValues(array) {
	let newArray = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i] % 2 === 0) {
			newArray.push(array[i]);
		}
	}

	return newArray;
}
//Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
function showFirstAndLast(arr) {
	let newArr = [];
	arr.forEach(function(val) {
		newArr.push(val[0] + val[val.length - 1]);
	});
	return newArr;
}
//Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object

function addKeyAndValue(arr, key, value) {
	arr.forEach(function(val) {
		val[key] = value;
	});
	return arr;
}
// vowelCount
// Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
function vowelCount(string) {
	//split each value in array
	let arraySplit = string.split('');
	//create an object to store everything
	let objContainer = {};
	//vowels
	const vowels = 'aeiou';
	arraySplit.forEach(function(letter) {
		let everyLetterLowerCase = letter.toLowerCase();
		//if
		if (vowels.indexOf(everyLetterLowerCase) !== -1) {
			if (objContainer[everyLetterLowerCase]) {
				objContainer[everyLetterLowerCase]++;
			} else {
				objContainer[everyLetterLowerCase] = 1;
			}
		}
	});
	return objContainer;
}
//Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled
function doubleValuesWithMap(array) {
	return array.map(function(value) {
		return value * 2;
	});
}
//Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.
function valTimesIndex(array) {
	return array.map(function(value, index) {
		return value * index;
	});
}
//Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.
function extractKey(array, key) {
	return array.map(function(value) {
		return value[key];
	});
}
//type something like this [{author: "Richard Garfield", course: "Mtg 101"}]
//return result should be "Mtg 101"

// /Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of “first” and the value of a key with the name of “last” in each object, concatenated together with a space.
function extractFullName(array) {
	return array.map(function(value) {
		return value.first + ' ' + value.last;
	});
}
//type something like this [{firstName: 'Lowry', lastName: 'Nakamura'}]
//return result should be Lowry Nakamura

//Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.
function filterByValue(arr, key) {
	return arr.filter(function(val) {
		return val[key] !== undefined;
	});
}

//Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

function find(arr, searchValue) {
	return arr.filter(function(val) {
		return val === searchValue;
	})[0];
}
//Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.
function findInObj(array, key, searchValue) {
	return array.filter(function(value) {
		return value[key] === searchValue;
	})[0];
}

//Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.
function removeVowels(str) {
	const vowels = 'aeiou';
	return str
		.toLowerCase()
		.split('')
		.filter(function(val) {
			return vowels.indexOf(val) === -1;
		})
		.join('');
}
//Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and fitler to double and then filter the odd numbers).
function doubleOddNumbers(arr) {
	return arr
		.filter(function(val) {
			return val % 2 !== 0;
		})
		.map(function(val) {
			return val * 2;
		});
}
