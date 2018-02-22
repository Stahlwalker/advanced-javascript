// Load the NPM Package inquirer
var inquirer = require("inquirer");
var Letter = require('./letter.js');
var Word = require('./word.js');

var guessesLeft = 10;

testYourMight = function(guessesLeft){
  console.log("So you think your smart!");
  console.log("Good luck guessing these superheros");
  console.log("\n----------\n");
}

// Create a "Prompt" with a series of questions.
inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      name: "LetterGuessed",
      message: "Guess a letter for your superhero: "
    }
  ])
  .then(function(inquirerResponse) {
    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
    if (inquirerResponse.confirm) {
      console.log("\nWelcome " + inquirerResponse.username);
      console.log("Your " + inquirerResponse.pokemon + " is ready for battle!\n");
    }
    else {
      console.log("\nThat's okay " + inquirerResponse.username + ", come again when you are more sure.\n");
    }
  });


testYourMight();
