



function Word(word) {
  this.word = word;
  this.checkLetter = function(letter, letters) {
    var letterFound = false;
    for (var i =0; i<this.word.length; i++) {
      if (this.word.charAt(i) === letter) {
        letterFound = true;
        letters[i].changeShown();
      }
    }
    return letterFound;
  }

this.checkIfSolved = function(letters) {
  var solved = true;
  for (var i=0; i<this.word.length; i++) {
    if(letters[i].shown === '_') {
      solved = false;
    }
  }
  return solved;
}
}

module.exports = Word;





// var letter = require("./letter.js");


// var wordList = ['superman', 'batman', 'flash', 'joker', 'cyborg', 'catwoman', 'riddler', 'robin', 'gambit', 'wolverine'];

// var randomWord = new Word(wordlist[Math.floor(Math.random()* wordList.length)]);



// // Requiring our CastMember constructor function we exported from castMember.js
// var CastMember = require("./castMember");

// // Constructor function for creating Movie objects
// var Movie = function(movieName, genre, budget) {
//   // this.cast will hold all of our CastMember objects
//   this.cast = [];
//   this.movieName = movieName;
//   this.genre = genre;
//   this.budget = budget;

//   // This method that creates a CastMember object from the constructor function we required and pushes it to the `this.cast` array
//   this.addCastMember = function(gender, name, role) {
//     this.cast.push(new CastMember(gender, name, role));
//   };
// };

// // Exporting the Movie constructor which we will use in main.js
// module.exports = Movie;
