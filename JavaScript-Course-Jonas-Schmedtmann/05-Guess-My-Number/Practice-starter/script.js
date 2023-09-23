'use strict';
// set ".message"
document.querySelector('.message').textContent = 'Hello World!';

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

  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);
  if (guess === random) {
    score += 1;
  }
  document.querySelector('.score').textContent = score;
});
// how
