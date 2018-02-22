var Word = require('./word.js');

module.exports = {
    selectWord : function() {
        var wordList = ['superman', 'batman', 'flash', 'joker', 'cyborg', 'catwoman', 'riddler', 'robin', 'gambit', 'wolverine'];
        var randomWord = Math.floor(Math.random() * wordList.length);
        var word = new Word(wordlist[randomWord]);
        return word;
    }
};
