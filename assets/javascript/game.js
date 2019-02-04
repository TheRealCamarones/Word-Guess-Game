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

// After talking about it with Dominick I agreed that ten is a good static number for 26 letters to guess, especially once you factor
// out x, z, q and other rarely used letters
var remainingGuesses = 10;

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
console.log(answerArray);
console.log(word);
if (word[j] = guess) {
    answerArray.replace(answerArray[j], guess);

}
}
}
