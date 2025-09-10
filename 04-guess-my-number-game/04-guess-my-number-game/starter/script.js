'use strict';

// Ranges and default
const MIN_NUMBER = 1;
const MAX_NUMBER = 20;
const START_SCORE = 20;

// cached selectors (single source of truth)
const messageEl = document.querySelector('.message');
const scoreEl = document.querySelector(`.score`);
const numberEl = document.querySelector(`.number`);
const highscoreEl = document.querySelector(`.highscore`);
const guessEl = document.querySelector(`.guess`);
const checkBtn = document.querySelector(`.check`);
const againBtn = document.querySelector(`.again`);

// UI helpers
function setMessage(text) {
  messageEl.textContent = text;
}
function setNumber(number) {
  numberEl.textContent = number;
}
function setScore(score) {
  scoreEl.textContent = score;
}
function setHighscore(highscore) {
  highscoreEl.textContent = highscore;
}
function setBackground(color) {
  document.body.style.backgroundColor = color;
}
function disablePlay(disabled) {
  guessEl.disabled = disabled;
  checkBtn.disabled = disabled;
}
function clearInput() {
  guessEl.value = '';
}

// Game State & Reset

let secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
let score = START_SCORE;
let highscore = 0;

function resetGameState() {
  score = START_SCORE;
  secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
}

function renderInitialUI() {
  setMessage('Start guessing...');
  setNumber('?');
  setScore(score);
  clearInput();
  disablePlay(false);
  setBackground('');
}

// Initial render
renderInitialUI();

// handlers
checkBtn.addEventListener(`click`, function () {
  const guess = Number(guessEl.value);

  // if you did not input any number, show no number
  if (!guess) return setMessage('No number!');
  if (guess < MIN_NUMBER || guess > MAX_NUMBER)
    return setMessage(
      `Number must be between ${MIN_NUMBER} and ${MAX_NUMBER}!`
    );

  if (guess === secretNumber) {
    setMessage('🎉 Correct Number!');
    setNumber(secretNumber);
    setBackground('green');
    if (score > highscore) {
      highscore = score;
      setHighscore(highscore);
    }
    disablePlay(true);
    clearInput();
    return; // early exit
  }

  // Wrong guess
  setMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
  score--;
  setScore(score);

  if (score < 1) {
    setMessage('💥 You lost!');
    setNumber(secretNumber);
    setBackground('red');
    disablePlay(true);
    clearInput();
  }
});

againBtn.addEventListener('click', function () {
  resetGameState();
  renderInitialUI();
  console.log(`New Secret Number`, secretNumber);
});

// Enter key submits when possible
window.addEventListener('keydown', function (e) {
  if (e.key === 'Enter' && !checkBtn.disabled) {
    checkBtn.click();
  }
});

// Focus input on restart
againBtn.addEventListener('click', function () {
  guessInputEl.focus();
});
