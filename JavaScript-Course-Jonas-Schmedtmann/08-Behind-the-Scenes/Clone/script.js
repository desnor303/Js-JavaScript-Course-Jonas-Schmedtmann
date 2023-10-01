// 'use strict';
/*
// Variable

console.log(me);
console.log(job);
console.log(year);

var me = 'Dat';
let job = 'engineer';
const year = 1996;

// Function
*/
/*
// This keyword
console.log(this);

function getAge(thisYear) {
  let year = 1996;
  let age = thisYear - year;
  console.log(age);
  console.log(this);
  return age;
}
getAge(2023);

let getAgeArrow = thisYear => {
  let year = 1996;
  let age = thisYear - year;
  console.log(age);
  console.log(this);
  return age;
};

getAgeArrow(2023);

const dat = {
  name: 'Dat',
  birthYear: 1996,
  money: 1000000,
  birthDay: function () {
    return `${this.name}'s birthDay is ${this.birthYear}`;
  },
};

const getBirth = dat.birthDay;

const BaoYen = {
  name: 'BaoYen',
  birthYear: 1995,
  money: 1000000,
};

BaoYen.birthDay = getBirth;
console.log(BaoYen.birthDay());

*/

const dat = {
  firstName: 'Dat',
  birthYear: 1996,
  money: 1000000,
  birthDay: function () {
    //   các cách để truyền "this" vào trong regular function
    /*
    // method 1
    const self = this;
    function isYounger() {
      console.log(self.birthYear < 1995);
    }
    // method 2
    isYounger = () => {
      console.log(this.birthYear < 1995);
    };
*/
    isYounger();
    return `${this.firstName}'s birthDay is ${this.birthYear}`;
  },

  //   don't use arrow function to create Obj method
  great: () => {
    console.log(`hey, ${this.firstName}`);
  },
};

// dat.great();
dat.birthDay();
