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

//todo Parital Application

const addTax = (rate, value) => value + rate * value;
console.log(addTax(0.2, 230));

// const addVAT = value => value + value*0,1;
const addVAT = addTax.bind(null, 0.1); // same as above
console.log(addVAT(100));

//Challenge by not using bind
const addVAT2 = value => addTax(0.1, value);
console.log(addVAT2(100));
