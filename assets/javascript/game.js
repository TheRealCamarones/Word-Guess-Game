// Refer to the DOM elements I plan on updating as game is running
var lettersGuessed = document.getElementById("letters-guessed");
var guessesLeft = document.getElementById("remaining-guesses");
var answerDisplay = document.getElementById("answer-array");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");

var button = document.getElementById("new-game-button")
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
var gameRunning = false;
var answer = "";
var answerArray = [];
var incorrectLetter = [];
var word = "";
var letter = "";

// newGame function will reset stats
function newGame() {
    gameRunning = true;
    remainingGuesses = 10;
    
    incorrectLetter = [];
    answerArray = [];
    //Pick a random word from my options in the array declare it in the global scope and then reassign inside the function...i think?
    word = words[Math.floor(Math.random() * words.length)];

    // Make an array of blank spaces to display to the user while they guess
    for (var i = 0; i < word.length; i++) {
        answerArray.push("_");
    }
    console.log(typeof answerArray.join(" "));
    console.log(word);
    console.log(answerDisplay);
    

    // Add game info to DOM
    lettersGuessed.textContent = incorrectLetter.join(" ");
    guessesLeft.textContent = remainingGuesses;
    answerDisplay.textContent = answerArray.join(" ");
    winsText.textContent = wins;
    lossesText.textContent = losses;
    button.textContent = "Guess a letter to play"
    
}

function guess(letter) {
    // checks that the game is running and that the letter hasn't been guessed already
    if (gameRunning === true && incorrectLetter.indexOf(letter) === -1) {
        // // and then runs the game logic
        // incorrectLetter.push(letter);

        // check if the guess is correct
        for (var j = 0; j < word.length; j++) {
            if (word[j].toLowerCase() === letter.toLowerCase()) {
                answerArray[j] = word[j];
                // gameWin = j
            }
        }
        answerDisplay.textContent = answerArray.join(" ");
        }
        else {
                alert("You've already guessed this letter, try a new one!");
            }
        }

// Check for incorrect letter
function checkIncorrect(letter) {
    if (answerArray.indexOf(letter.toLowerCase()) === -1
        &&
        answerArray.indexOf(letter.toUpperCase()) === -1
        &&
        incorrectLetter.indexOf(letter) === -1) {
        remainingGuesses--;
        incorrectLetter.push(letter);
        lettersGuessed.textContent = incorrectLetter.join(" ");
        guessesLeft.textContent = remainingGuesses;
    }
}

// check loss
function checkLoss() {
    if (remainingGuesses === 0) {
        losses++;
        gameRunning = false;
        lossesText.textContent = losses;
        button.textContent = "Sorry, you lost. Press any key to play again!";
        answerDisplay.textContent = word;
    }
    checkWin();
}

// Check win
function checkWin() {
    if (word.toLowerCase() === answerArray.join("")) {
        wins++;
        gameRunning = false;
        winsText.textContent = wins;
        button.textContent = "Conratulations! You know a lot of types of beer! Press a key to start over"
    }
}

// key event to guess a letter that's actually a letter
document.onkeyup = function (event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        letter = event.key.toLowerCase();
        if (gameRunning === false) {
            newGame();
        }
        guess(letter);
        checkIncorrect(letter);
        checkLoss(letter);
        console.log(event.key);
        console.log(lettersGuessed);
    }
}
