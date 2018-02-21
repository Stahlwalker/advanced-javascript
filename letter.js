// Constructor function for creating CastMember objects
var Letter = function(character, placeholder, correctLetter) {
    this.character = "";
    // this.placeholder= Boolean("");
    this.placeholder= "_";
    this.correctLetter= true;

    this.character = function() {
        var displayLetter = "";

        if(this.character === correctLetter){
            displayLetter ="";
        }
        else{
            dsiplayLetter = placeholder;
        }

        console.log(this.character + ": Letter " + displayLetter + "is correct");
    };

    this.character = function() {
        var checkLetter = "";

        if(this.character === correctLetter){

        }
    }

};

module.exports = Letter;


// var CastMember = function(gender, name, role) {
//     this.gender = gender;
//     this.name = name;
//     this.role = role;
  
//     // Prints out slightly different information about a cast member based on their gender
//     this.readProfile = function() {
//       var title = "";
  
//       if (this.gender === "female") {
//         title = "actress";
//       }
//       else {
//         title = "actor";
//       }
  
//       console.log(this.name + ": An " + title + "playing the role of " + this.role + ".");
//     };
//   };
  
//   // Exporting our CastMember constructor. We will require it in movie.js
//   module.exports = CastMember;
