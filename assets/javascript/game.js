// Refer to the DOM elements I plan on updating as game is running
var lettersGuessed = document.getElementById("letters-guessed");
var remainingGuesses = document.getElementById("remaining-guesses");
var answerDisplay = document.getElementById("answer-display");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
// var newGameButton = document.getElementById("new-game-button");

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

var wins = 0;
var losses = 0;
// After talking about it with Dominick I agreed that ten is a good static number for 26 letters to guess, especially once you factor
// out x, z, q and other rarely used letters
var remainingGuesses = 10;
var gameRunning = true;
var answer = "";
var answerArray = [];
var guessedLetter = [];
var incorrectLetter = [];

// newGame function will reset stats
function newGame() {
    // gameRunning = true;
    remainingGuesses = 10;
    guessedLetter = [];
    incorrectLetter = [];
    answerArray = [];

    // Pick a random word from my options in the array
    var word = words[Math.floor(Math.random() * words.length)];

    // Make an array of blank spaces to display to the user while they guess
    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
        answerArray.push("_");
    }

    // Add game info to DOM
    lettersGuessed.textContent = lettersGuessed;
    remainingGuesses.textContent = remainingGuesses;
    answerDisplay.textContent = answerArray;
    winsText.textContent = winsText;
    lossesText.textContent = lossesText;
}

function guess(letter) {
    console.log(letter);

    // checks that the game is running and that the letter hasn't been guessed already
    if (gameRunning === true && guessedLetter.indexOf(letter) === -1) {
        // and then runs the game logic
        guessedLetter.push(letter);

        // check if the guess is correct
        for (var j = 0; j < remainingGuesses; j++) {
            if (word[j].toLowerCase() === letter.toLowerCase()) {
                answerArray[j] === word[j];
            }
        }

        answerDisplay.textContent = answerArray.join("");

    }
    else {
        if (!gameRunning) {
            alert("Start a New Game");
        } else {
            alert("You've already guessed this letter, try a new one!");
        }
    }
}
// Check for incorrect letter
function checkincorrect(letter) {
    if (answerArray.indexOf(letter.toLowerCase()) === -1
        &&
        answerArray.indexOf(letter.toUpperCase()) === -1) {
        remainingGuesses--;
        incorrectLetter.push(letter);
        lettersGuessed.textContent = incorrectLetter.join("");
        remainingGuesses.textContent = remainingGuesses;
    }
}

// check loss
function checkLoss() {
    if (remainingGuesses === 0) {
        losses++;
        gameRunning = false;
        losses.textContent = losses;
    }
    checkWin();
}

// Check win
function checkWin() {
    if (word.toLowerCase() === answerArray.join("").toLowerCase()) {
        wins++;
        gameRunning = false;
        wins.textContent = wins;
    }
}
// click event to start the game
// newGameButton.addEventListener("click", newGame);

// key event to guess a letter that's actually a letter
document.onkeyup = function (event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        newGame;
        guess(event.key);
    }
}
