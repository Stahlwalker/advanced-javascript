

var letter = require("./letter.js");


var wordList = ['superman', 'batman', 'flash', 'joker', 'cyborg', 'catwoman', 'riddler', 'robin', 'gambit', 'wolverine'];

var randomWord = new Word(wordlist[Math.floor(Math.random()* wordList.length)]);



// Requiring our CastMember constructor function we exported from castMember.js
var CastMember = require("./castMember");

// Constructor function for creating Movie objects
var Movie = function(movieName, genre, budget) {
  // this.cast will hold all of our CastMember objects
  this.cast = [];
  this.movieName = movieName;
  this.genre = genre;
  this.budget = budget;

  // This method that creates a CastMember object from the constructor function we required and pushes it to the `this.cast` array
  this.addCastMember = function(gender, name, role) {
    this.cast.push(new CastMember(gender, name, role));
  };
};

// Exporting the Movie constructor which we will use in main.js
module.exports = Movie;




// Words = {};
// Words.List = [];

// Words.List[0] = "superman";
// Words.List[1] = "batman";
// Words.List[2] = "flash";
// Words.List[3] = "joker";
// Words.List[4] = "cyborg";
// Words.List[5] = "catwoman";
// Words.List[6] = "riddler";
// Words.List[7] = "robin";
// Words.List[8] = "gambit";
// Words.List[9] = "wolverine";

// Words.List[10] = "bear";
// Words.List[11] = "staple";
// Words.List[12] = "printer";
// Words.List[13] = "hat";
// Words.List[14] = "pen";
// Words.List[15] = "headphones";
// Words.List[16] = "chair";
// Words.List[17] = "paper";
// Words.List[18] = "drink";
// Words.List[19] = "eat";

// Words.List[20] = "shirt";
// Words.List[21] = "pants";
// Words.List[22] = "backpack";
// Words.List[23] = "flag";
// Words.List[24] = "clock";
// Words.List[25] = "coffee";
// Words.List[26] = "timer";
// Words.List[27] = "coat";
// Words.List[28] = "tie";
// Words.List[29] = "work";

// Words.List[30] = "locker";
// Words.List[31] = "stairs";
// Words.List[32] = "corridor";
// Words.List[33] = "hallway";
// Words.List[34] = "packers";
// Words.List[35] = "door";
// Words.List[36] = "video";
// Words.List[37] = "camera";
// Words.List[38] = "keyboard";
// Words.List[39] = "apple";

// Words.Length = Words.List.length();
