'use strict';

//todo default parameter
/*
const bookings = [];
const creatBooking = function (
  flightNum,
  numPassenger = 1,
  price = 199 * numPassenger
) {
  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  bookings.push(booking);
};

creatBooking('b123', undefined, 200);
console.log(bookings);

*/
//todo How Passing Arguments Works: Value vs. Reference
/* 

const flight = 'MK937';
const Datha = {
  name: 'DatHa',
  passport: 123210942198,
};

const checkin = function (flightCode, Passenger) {
  flightCode = 'MT362';
  Passenger.name = 'BaoYen';
};
checkin(flight, Datha);
console.log(flight);
console.log(Datha);
//! Datha object is changed, because behind the scenes
//! ( the obj in the heap is the same) :

let Passenger = Datha;
Passenger.name = 'BaoYen';

"Truyền theo tham chiếu" (Pass by Reference-like) áp dụng
cho các đối tượng và mảng. Khi bạn truyền một đối tượng hoặc
 mảng vào một hàm, bạn đang truyền một tham chiếu đến đối
 tượng hoặc mảng đó. Tham chiếu này cho phép bạn thay đổi
 trạng thái của đối tượng hoặc mảng bên trong hàm và ảnh hưởng
 đến đối tượng hoặc mảng gốc bên ngoài hàm.

 */
//todo: Functions Accepting Callback Functions
/*
function tranformer(str, fn) {
  console.log(`The original string: ${str}`);
  console.log(`The Function is used: ${fn.name}()`);
  console.log(`The tranformed string: ${fn(str)}`);
}

function firstUpper(str) {
  let [first, ...other] = str.split(' ');
  return [first.toUpperCase(), ...other].join(' ');
}

tranformer('hello World', firstUpper);
*/
//todo: Functions Returning Functions
/*
const greating = greating => name => console.log(`${greating}, ${name}`);
greating('Hi')('BaoYen');
*/
//Todo  The call, the apply and the bind Methods
/*
const vietjet = {
  airline: 'vietjet',
  IATAcode: 'VJ',
  booking: [],
  book(flightNum, name) {
    console.log(
      `${name} booked seat on ${this.airline} flight ${
        this.IATAcode + flightNum
      }`
    );
    this.booking.push({
      flight: this.IATAcode + flightNum,
      name,
    });
  },
};

vietjet.book(237, 'BaoYEn');
console.log(vietjet);

const bambo = {
  airline: 'bambo',
  IATAcode: 'BB',
  booking: [],
};

const book = vietjet.book;

// ! does not work !
// book(248, 'DatHa');
//? function method "call"

book.call(bambo, 248, 'DatHa');
console.log(bambo);

book.call(vietjet, 118, 'DongDuc');
console.log(vietjet);

//? function method "apply" ( same as call() above) (no used in modern Js anymore)

const _datha22_07 = [248, 'DatHa'];
book.apply(bambo, _datha22_07);
//book.call(bambo, ..._datha22_07); //in modern Js, use can replace apply to call() by using spread Op
console.log(bambo);

//? The bind Method
const Vn_air = {
  airline: 'Vn_air',
  IATAcode: 'HVN',
  booking: [],
};
const bookVn_air = book.bind(Vn_air);
bookVn_air(347, 'PhucHIeu');
console.log(Vn_air);

//! the plus of using bind() method more then call()
const bookVn_air_981 = book.bind(Vn_air, 981);
bookVn_air_981('Tuan');
bookVn_air_981('Nam');

//? Event listener practice using bind Method
Vn_air.planes = 1000;
Vn_air.newPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
//!this keyword really is set dynamically.
// case 1:
Vn_air.newPlane(); // in this, you can buy a plant !
// case 2:
document.querySelector('.buy').addEventListener('click', Vn_air.newPlane); //in this, you can  not buy a plant ( just try to "click"! )
// case 2 plus bind:
document
  .querySelector('.buy')
  .addEventListener('click', Vn_air.newPlane.bind(Vn_air)); //in this, you can  not buy a plant ( just try to "click"! )

*/
//todo Parital Application
/*
const addTax = (rate, value) => value + rate * value;
console.log(addTax(0.2, 230));

// const addVAT = value => value + value*0,1;
const addVAT = addTax.bind(null, 0.1); // same as above
console.log(addVAT(100));

//Challenge by not using bind
const addVAT2 = value => addTax(0.1, value);
console.log(addVAT2(100));
*/

// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

/*
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    let answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\nWrite option number:`
      )
    );
    answer < this.options.length && this.answers[answer]++;
    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') console.log(this.answers);
    if (type === 'string')
      console.log(`Poll results are ${this.answers.join(', ')}`);
  },
};
// 2.
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'array');
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
*/

//todo: Closure

/* //basic
const secureBook = () => {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(passengerCount);
  };
};

const booker = secureBook();
booker(); //output: 1
booker(); //output: 2
booker(); //output: 3
*/
//? example 1:
/*
let a;
let b = function () {
  let target1 = 100;
  a = () => {
    console.log(target1 * 2);
  };
};

let c = function () {
  let target2 = 150;
  a = () => {
    console.log(target2 * 2);
  };
};

b();
a();
console.dir(a);
// re-assign function a ()
c();
a();
console.dir(a); // after re-assign, Closure variable chance
*/
//? example 2:
const boardPassenger = (num, time) => {
  // let group = num / 3;
  setTimeout(() => {
    console.log(
      `${num} passenger have onboard, each group has ${group} passenger`
    );
  }, time);
  console.log(`${num} passenger're waiting onboard in ${time}`);
};
let group = 600;

boardPassenger(1200, 3000);

// Coding Challenge #2

/*
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
