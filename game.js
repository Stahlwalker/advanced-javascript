
var Word = require('./word.js');

module.exports = {
    selectWord : function() {
        var wordList = ['superman', 'batman', 'flash', 'joker', 'cyborg', 'catwoman', 'riddler', 'robin', 'gambit', 'wolverine'];
        var num = Math.floor(Math.random() * 10);
        var word = new Word(wordList[num]);
        return word;
    }
};
