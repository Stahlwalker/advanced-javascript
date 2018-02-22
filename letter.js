// Constructor function for creating letter objects


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

// $(function(){
//     $("#a, #b, #c, #d, #e, #f, #g, #h, #i, #j, #k, #l, #m, #n, #o, #p, #q, #r, #s, #t, #u, #v, #w, #x, #y, #z").click(function(event) {
//         event.preventDefault();
//         Main.UpdateLetter("");
//     });
//     }



$(function(){
	$("#a").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("a");
	});
	}
);

$(function(){
	$("#b").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("b");
	});
	}
);

$(function(){
	$("#c").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("c");
	});
	}
);

$(function(){
	$("#d").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("d");
	});
	}
);

$(function(){
	$("#e").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("e");
	});
	}
);

$(function(){
	$("#f").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("f");
	});
	}
);

$(function(){
	$("#g").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("g");
	});
	}
);

$(function(){
	$("#h").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("h");
	});
	}
);

$(function(){
	$("#i").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("i");
	});
	}
);

$(function(){
	$("#j").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("j");
	});
	}
);

$(function(){
	$("#k").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("k");
	});
	}
);$(function(){
	$("#l").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("l");
	});
	}
);

$(function(){
	$("#m").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("m");
	});
	}
);

$(function(){
	$("#n").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("n");
	});
	}
);

$(function(){
	$("#o").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("o");
	});
	}
);

$(function(){
	$("#p").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("p");
	});
	}
);

$(function(){
	$("#q").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("q");
	});
	}
);

$(function(){
	$("#r").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("r");
	});
	}
);

$(function(){
	$("#s").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("s");
	});
	}
);

$(function(){
	$("#t").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("t");
	});
	}
);

$(function(){
	$("#u").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("u");
	});
	}
);

$(function(){
	$("#v").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("v");
	});
	}
);$(function(){
	$("#w").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("w");
	});
	}
);

$(function(){
	$("#x").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("x");
	});
	}
);

$(function(){
	$("#y").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("y");
	});
	}
);

$(function(){
	$("#z").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("z");
	});
	}
);
