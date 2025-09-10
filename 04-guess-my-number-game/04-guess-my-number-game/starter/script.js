// 'use strict';

// console.log('Game setup ready');

// // ===== DOM Element Selection =====
// console.log(`=== DOM Element Selection ===`);

// const messageEl = document.querySelector('.message');
// console.log(messageEl);

// console.log(messageEl.textContent);

// messageEl.textContent = 'Hello from javascript!!!';

// // Access score class name

// const scoreEl = document.querySelector(`.score`);

// console.log(`Score Element:`, scoreEl);

// const numberEl = document.querySelector(`.number`);
// numberEl.textContent = 15;

// const highscoreEl = document.querySelector(`.highscore`);

// console.log(`Current Highscore:`, highscoreEl.textContent);

// const guessEl = document.querySelector(`.guess`);

// guessEl.value = 10;

// console.log(`Guess Input Value:`, guessEl.value);

// Game State Variables

let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Debugging
console.log(`Secret Number:`, secretNumber);

let score = 20;
let highscore = 0;

document.querySelector(`.score`).textContent = score;
document.querySelector(`.highscore`).textContent = highscore;

console.log(`Game State Initialized`);

// playerName attempts, gameActive
// and display to console

let playerName = 'Aisha';
let attempts = 0;
let gameActive = true;

console.log(`Player:`, playerName);
console.log(`Attempts:`, attempts);
console.log(`Game Active:`, gameActive);

// Basic Game Logic
document.querySelector(`.check`).addEventListener(`click`, function () {
  //code here
  console.log(`Check button clicked!!!`);
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(`Player Guess:`, guess);

  // if you did not input any number, show no number
  if (!guess) {
    document.querySelector(`.message`).textContent = 'No number!';
    return;
  }

  if (!guess) {
    document.querySelector(
      `.message`
    ).textContent = `Number must be between 1 and 20!`;
    return;
  }

  if (guess === secretNumber) {
    console.log(`Correct Guess!`);
    document.querySelector(`.message`).textContent = 'Correct Number!';
    document.querySelector(`.number`).textContent = secretNumber;
    document.body.style.backgroundColor = `green`;
    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
      document.querySelector(`.message`).textContent =
        'You are a winner, baby!!!';
      document.querySelector(`.guess`).disabled = true;
      document.querySelector(`.check`).disabled = true;
    }
  } else if (guess > secretNumber) {
    console.log(`Too High!`);
    document.querySelector(`.message`).textContent = 'Too High!';
    score--;
    document.querySelector(`.score`).textContent = score;
    if (score < 1) {
      document.querySelector(`.message`).textContent = 'You lose!!!';
      document.querySelector(`.number`).textContent = secretNumber;
      document.querySelector(`.guess`).disabled = true;
      document.querySelector(`.check`).disabled = true;
      document.body.style.backgroundColor = `red`;
    }
  } else if (guess < secretNumber) {
    console.log(`Too Low!`);
    document.querySelector(`.message`).textContent = 'Too Low!';
    score--;
    document.querySelector(`.score`).textContent = score;
    if (score < 1) {
      document.querySelector(`.message`).textContent = 'You lose!!!';
      document.querySelector(`.number`).textContent = secretNumber;
      document.querySelector(`.guess`).disabled = true;
      document.querySelector(`.check`).disabled = true;
      document.body.style.backgroundColor = `red`;
    }
  }
});

const guess = Number(document.querySelector(`.guess`).value);
console.log(`Player Guess:`, guess);

document.querySelector(`.again`).addEventListener(`click`, function () {
  console.log(`Again button is working!!!`);
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(`Your New Secret Number:`, secretNumber);
  document.querySelector(`.message`).textContent = 'Start guessing...';
  document.querySelector(`.number`).textContent = '?';
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.guess`).value = '';
  document.querySelector(`.guess`).disabled = false;
  document.querySelector(`.check`).disabled = false;
  document.body.style.backgroundColor = '';
});
