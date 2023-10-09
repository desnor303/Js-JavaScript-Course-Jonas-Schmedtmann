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
/* */
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

// "Truyền theo tham chiếu" (Pass by Reference-like) áp dụng
// cho các đối tượng và mảng. Khi bạn truyền một đối tượng hoặc
//  mảng vào một hàm, bạn đang truyền một tham chiếu đến đối
//  tượng hoặc mảng đó. Tham chiếu này cho phép bạn thay đổi
//  trạng thái của đối tượng hoặc mảng bên trong hàm và ảnh hưởng
//  đến đối tượng hoặc mảng gốc bên ngoài hàm.
