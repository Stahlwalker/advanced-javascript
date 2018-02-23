// Load the NPM Package inquirer
var inquirer = require("inquirer");
var Letter = require('./letter.js');
var Word = require('./word.js');

var wordList = ['superman', 'batman', 'flash', 'joker', 'cyborg', 'catwoman', 'riddler', 'robin', 'gambit', 'wolverine'];
var randomWord = Math.floor(Math.random() * wordList.length);
var word = new Word(wordList[randomWord]);
var letters = [];
console.log('-----------------------');
console.log("Welcome to Superhero Hangman");
console.log("Guess a letter of the name of the superhero");
console.log("Best of luck you you!");
console.log('-----------------------');

for (var i=0; i<randomWord.length; i++) {
  letters.push(new Letter(randomWord.charAt(i)));
}

// return word;


var guessesLeft = 10;
startGame();

function startGame() {
  displayWord();
  inquirer
    .prompt([
      // Here we create a basic text prompt.
      {
        type: "input",
        name: "LetterGuessed",
        message: "Guess a letter for your superhero: "
      }
    ])
    .then(function (inquirerResponse) {
      // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
      if (word.checkLetter(inquirerResponse.letter, letters) === true) {
        console.log("\nWelcome " + "Good Job!");
      } 
      else {
        guessesLeft--;
        if (guessesLeft > 0) {
          console.log("Incorrect. You have " + guessesLeft + " guesses left.");
        } 
        else {
          console.log("WronGGGGG, Game OVER dude!");
        }
      }
      if (word.checkIfSolved(letters) === false) {
        if (guessesLeft > 0) {
          startGame();
        }
      } else {
        displayWord();
        console.log("Victory is yours!");
      }
    });

  function displayWord() {
    var displayedWord = "";
    for (var i = 0; i < letters.lenght; i++) {
      displayedWord += letters[i].displayLetter();
      displayedWord += " ";
    }
    console.log(displayedWord);
  }
};

// startGame();











// startGame = function(guessesLeft){
//   console.log("So you think your smart!");
//   console.log("Good luck guessing these superheros");
//   console.log("\n----------\n");
// }

// // Create a "Prompt" with a series of questions.
// inquirer
//   .prompt([
//     // Here we create a basic text prompt.
//     {
//       type: "input",
//       name: "LetterGuessed",
//       message: "Guess a letter for your superhero: "
//     }
//   ])
//   .then(function(inquirerResponse) {
//     // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
//     if (inquirerResponse.confirm) {
//       console.log("\nWelcome " + inquirerResponse.username);
//       console.log("Your " + inquirerResponse.pokemon + " is ready for battle!\n");
//     }
//     else {
//       console.log("\nThat's okay " + inquirerResponse.username + ", come again when you are more sure.\n");
//     }
//   });


// startGame();
