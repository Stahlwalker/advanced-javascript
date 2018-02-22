// Constructor function for creating letter objects
function Letter(letter) {
    this.letter = letter;
    this.placeholder = "_";

    this.displayLetter = function() {
        return this.placeholder;
    }

    this.updatedDisplay = function() {
        this.placeholder = letter;
    }
}

module.exports = Letter;

// var Letter = function(character, placeholder, correctLetter) {
//     this.character = "";
//     // this.placeholder= Boolean("");
//     this.placeholder= "_";
//     this.correctLetter= true;

//     this.character = function() {
//         var displayLetter = "";

//         if(this.character === correctLetter){
//             displayLetter ="";
//         }
//         else{
//             dsiplayLetter = placeholder;
//         }

//         console.log(this.character + ": Letter " + displayLetter + "is correct");
//     };

//     this.character = function() {
//         var checkLetter = "";

//         if(this.character === correctLetter){

//         }
//     }

// };

// module.exports = Letter;
