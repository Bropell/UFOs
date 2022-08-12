// Initialize the function
function convertString(sentence) {
  
  // Convert string to an array of words
  var arrayWords = sentence.split(" ");

  // An object to hold word frequency
  var wordFrequency = {};

  // Iterate through the array and count the occurrence of each word
  arrayWords.forEach(function(word) {
    
    // If the word has been seen before...
    if (wordFrequency[word] !== undefined) { 
      // Add one to the counter
      wordFrequency[word] += 1;
    }
    else {
      // Set the counter to 1
      wordFrequency[word] = 1;
    }    
  });

  console.log(wordFrequency);
  return wordFrequency;
};

//  Call the function with the string as a parameter.
convertString("hope you have a happy happy birthday");