'use strict';
// click btn event :
// 1. 3 modal with a same function
// Object
const btn = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const close_btn = document.querySelector('.close-modal');
// function
const show = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
console.log(document);
const hidden = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// process
// show
for (let i = 0; i < btn.length; i++) btn[i].addEventListener('click', show);
//hidden
close_btn.addEventListener('click', hidden);
overlay.addEventListener('click', hidden);
document.addEventListener('keydown', event => {
  if (!modal.classList.contains('hidden') && event.key === 'Escape') {
    hidden();
  }
});
