// Set my variables
var words = [
    "pilsner",
    "lager",
    "helles",
    "stout",
    "porter",
    "saison",
    "marzen",
    "kolsch",
    "weisse",
    "tripel"
];

// Pick a random word from my options in the array
var word = words[Math.floor(Math.random() * words.length)];

// Give the user the length of the word plus four extra guesses, I dunno that sounds good right now
var remainingGuesses = word.length + 4;

// variable to display remaining letters
var remainingLetters = word.length;

// Make an array of blank spaces to display to the user while they guess
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

// Main loop for game logic to run in
for (var j = 0; j < remainingGuesses; j++) {


document.onkeyup = function(event) {

var guess = event.key;
console.log(guess);
}
}
