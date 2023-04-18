'use strict';

// query selector
// start guessing was written in message.
// console.log(document.querySelector('.message'));
// document.querySelector('.message').textContent = 'Correct Number🥳';

// document.querySelector('.number').textContent = 16;
// document.querySelector('.score').textContent = 25;

// for input values you would use value property to access it. You can also use it to change values.
// console.log(document.querySelector('.guess').value);
// console.log((document.querySelector('.guess').value = 20));

// secret value is value that is being set as the correct answer.
// Math trunc rounds values to a whole number.
let secretValue = Math.trunc(Math.random() * 20 + 1);

// score value
let score = 20;
// highest score value
let highScore = 0;

// query selector statements
const selectorMessage = document.querySelector('.message');
const selectorScore = document.querySelector('.score');
const selectorNumber = document.querySelector('.number');
const resetGuessValue = document.querySelector('.guess');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

// any input into javascript is by default a string. Implementing parseInt or Number will make it into a number.
document.querySelector('.check').addEventListener('click', function () {
  const guessValue = Number(document.querySelector('.guess').value);
  // if value field is empty the scenario will be outputted
  if (guessValue == '') {
    selectorMessage.textContent = '🔢 Please enter a number ';
  } else if (guessValue === secretValue) {
    selectorMessage.textContent = '✅ You got the correct answer';
    score++;
    selectorScore.textContent = score;
    selectorNumber.textContent = secretValue;
    selectorNumber.style.width = '30rem';
    // Show modal box when answer is correct
    modal.classList.remove('hidden');
    modal.style.backgroundColor = '#00ff00';
    overlay.classList.remove('hidden');
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }

    // When guess is wrong
  } else if (guessValue !== secretValue) {
    if (score > 1) {
      selectorMessage.textContent =
        guessValue > secretValue ? 'Too high!' : 'Too Low';
      score--;
      console.log(score);
      selectorScore.textContent = score;
    } else {
      selectorMessage.textContent = '❌You lost the game!, START AGAIN!';
      selectorScore.textContent = 0;
      document.body.style.backgroundColor = '#ff0000';
    }
  }
});

// again btn listener

document.querySelector('.again').addEventListener('click', function () {
  // reset guess, message and score
  score = 20;
  secretValue = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.score').innerHTML = 20;
  selectorMessage.textContent = 'Start Guessing...';
  resetNumField.value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
