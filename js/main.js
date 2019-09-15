window.addEventListener('load', init);
// globals

// Available levels
const levels = {
    easy: 5,
    medium: 3,
    hard: 2
}

// to change level
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM events
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
];

// Initialize game
function init() {
    // Show number of Seconds in UI
    seconds.innerHTML = currentLevel;
    //load word from array
    showWord(words);
    // Start matching on word input
    wordInput.addEventListener('input', startMatch);
    // Call countdown every second
    setInterval(countdown, 1000);
    // check game status
    setInterval(checkStatus,50);
}
// start match
function startMatch() {
    if (matchWords()) {
        isPalying = true;
        time = 6;
        showWord(words);
        wordInput.value = '';
        score++;
    }
    
    // If score is -1, display 0
    if (score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }
}

// Match currentWord to wordInput
function matchWords() {
    if (wordInput.value === currentWord.innerHTML) {
            message.innerHTML = 'correct';
            return true;
        } else {
            message.innerHTML = '';
            return false;
        }
}

// pick & show random word
function showWord(words) {
    // Generate random array index
    const randIndex = Math.floor(Math.random() * words.length);
    // Output random word
    currentWord.innerHTML = words[randIndex];
}

// Countdown timer
function countdown() {
    // Make sure time is not run out
    if (time > 0) {
        //decrement
        time--;
    } else if (time === 0) {
        // game is over
        isPlaying = false;
    }
    // Show time
    timeDisplay.innerHTML = time;
}

// check game status
function checkStatus() {
    if (!isPlaying && time === 0) {
        message.innerHTML = 'Game Over!!!';
        score = -1;
    }
}