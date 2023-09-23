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
let score = 0;
document.querySelector('.score').textContent = score;
// get ".guess"
document.querySelector('.guess').value;
// clickEvent
document.querySelector('.check').addEventListener('click', function () {
  // set ".number"
  const random = Math.floor(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = random;

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
