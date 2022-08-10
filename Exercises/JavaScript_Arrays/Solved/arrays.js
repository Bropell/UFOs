// A JavaScript array is much like a Python list
// Here, start with a blank array
let letterArray;
letterArray = ['a', 'b', 'c', 'd'];

// Display the array in console
console.log(letterArray);

// Use indexing to access an array item
console.log(letterArray[0]);

// Use push() to append an item to an array
letterArray.push("e");
console.log(letterArray);

// Use slice() to return selected items of an array


// Return the first three items of an array
console.log('first 3 elements of the array');
console.log(letterArray.slice(0, 3));

// Return the second and third items of an array
console.log('2nd and 3rd element of the array');
console.log(letterArray.slice(1, 3));


// Use join() to return items of an array into a single string
console.log(letterArray.join(","));

// A JavaScript string
var joinedString = letterArray.join(",");

// Use indexing to access a string character
console.log("first character of the stirng");
console.log(joinedString[0]);

// Split a string into an array of substrings
console.log(joinedString.split(","));

// Here, split the string where spaces are found
var soundOfMusic = "The hills are alive with the sound of music";
console.log(soundOfMusic.split(" "));