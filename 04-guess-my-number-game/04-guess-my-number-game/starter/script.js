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

  if (guess === secretNumber) {
    console.log(`Correct Guess!`);
    document.querySelector(`.message`).textContent = 'Correct Number!';
    document.querySelector(`.number`).textContent = secretNumber;
  } else if (guess > secretNumber) {
    console.log(`Too High!`);
    document.querySelector(`.message`).textContent = 'Too High!';
  } else if (guess < secretNumber) {
    console.log(`Too Low!`);
    document.querySelector(`.message`).textContent = 'Too Low!';
  }
});

const guess = Number(document.querySelector(`.guess`).value);
console.log(`Player Guess:`, guess);
