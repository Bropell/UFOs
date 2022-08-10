// Array of movie ratings
var movieScores = [
  4.4,
  3.3,
  5.9,
  8.8,
  1.2,
  5.2,
  7.4,
  7.5,
  7.2,
  9.7,
  4.2,
  6.9
];

// Starting a rating count
var sum = 0;

// Arrays to hold movie scores
var goodMovieScores = [];
var okMovieScores = [];
var badMovieScores = [];

for (let i= 0; i < movieScores.length; i++){
  if(movieScores[i] >= 7){
    goodMovieScores.push(movieScores[i]);
  }
  else if(movieScores[i] >= 5){
    okMovieScores.push(movieScores[i]);
  }
  else{
    badMovieScores.push(movieScores[i]);
  }
}

var numGoodMovies = goodMovieScores.length;
var numOkMovies = okMovieScores.length;
var numBadMovies = badMovieScores.length;


console.log(`There are ${numGoodMovies} Good Movies`);
console.log(goodMovieScores);

console.log(`There are ${numOkMovies} Ok Movies`);
console.log(okMovieScores);

console.log(`There are ${numBadMovies} Bad Movies`);
console.log(badMovieScores);