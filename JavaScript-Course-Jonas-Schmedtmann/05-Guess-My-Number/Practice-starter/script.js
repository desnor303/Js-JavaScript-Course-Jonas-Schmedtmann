'use strict';
// set ".message"
// get ".guess"
// document.querySelector('.guess').value;
// document.querySelector('.message').textContent = 'Hello World!';
// =====================

// set highscore !
let highscore = 0;
let score;
const scoreAssgin = () => {
  score = 20;
  document.querySelector('.score').textContent = score;
};

// UI style
let UIstyle = (backgroundColorIndex, remNumber) => {
  document.querySelector('body').style.backgroundColor = backgroundColorIndex;
  document.querySelector('.number').style.width = `${remNumber}rem`;
};

// set score !
scoreAssgin();

// displayMessage
const displayMessage = mess => {
  document.querySelector('.message').textContent = mess;
};

// make ramdom
let random = Math.floor(Math.random() * 20) + 1;
// check Button !
const checkBtn = function () {
  // make guess
  let guess = Number(document.querySelector('.guess').value);
  // Logic !
  // Number ?
  if (!guess) {
    displayMessage('Please assign a Number to begin!');
  }
  // not correct ?
  else if (guess !== random) {
    if (score <= 0) {
      displayMessage('You Lose! 💥');
      UIstyle('#732237', 30);
    } else {
      score -= 1;
      guess > random
        ? displayMessage('Too High!! 📉')
        : displayMessage('Too Low!! 📈');
    }
  }
  // correct ?
  else if (guess === random) {
    displayMessage('🎉 Correct Number!');
    UIstyle('#60b347', 30);
    document.querySelector('.highscore').textContent = score;
  }

  // update score
  document.querySelector('.score').textContent = score;
};
// Reset Button ! .again
const reBtn = () => {
  scoreAssgin();
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  random = Math.floor(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  // #group
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};

// EventListener
document.querySelector('.check').addEventListener('click', checkBtn);
document.querySelector('.again').addEventListener('click', reBtn);
// how
