'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterMenuIndex, mainMenuIndex) {
    return [this.starterMenu[starterMenuIndex], this.mainMenu[mainMenuIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDeliver: function ({
    time = '8:00',
    address = '',
    mainIndex = 0,
    staterIndex = 0,
  }) {
    console.log(
      `In ${time}, at ${address} has order ${this.starterMenu[staterIndex]} and ${this.mainMenu[mainIndex]}`
    );
  },
  makePizzaBuffet: function (ele1, ele2, ele3) {
    ele2 = ele2 === '' ? 'no toppings' : ele2;
    ele3 = ele3 === '' ? 'no seasonings included' : ele3;
    console.log(`This order will have ${ele1} with ${ele2} and ${ele3}`);
  },
};

//TODO ** Destructoring **
//? Basic
/*
const array = [1, 2, 3];
let [a, b, c] = array;
console.log(a, b, c);
[a, b] = [b, a];
console.log(a, b);
*/

//? Receive 2 value from a function
/*
let [starterMenu, mainMenu] = restaurant.order(2, 1);
console.log(starterMenu, mainMenu);
*/
//?/ Nested destructuring

/*
let arr2 = [1, 2, [5, 6]];
let [i, , [k, l]] = arr2;
console.log(k, l);
*/

//? Default value
/*
const [p, q, r = 3] = [1, 2, 3];
console.log(p, q, r);

*/
// todo ** destructoring Object **

//? basic
/*
const { name, mainMenu, openingHours } = restaurant;
console.log(name, mainMenu, openingHours);
*/
//?  Name the variable  destructoring Object, with give the default value
/*
const {
  name: restaurantName = [],
  Menu: Menu = [], // dont have Menu pros in restaurant, then Menu = []
  openingHours: Time = [],
} = restaurant;
console.log(restaurantName, Menu, Time);
*/
//? mutation Variable
/*
let a = 5;
let b = 50;
let obj = {
  a: 11,
  b: 22,
};

({ a, b } = obj); //! we neen branket, because not - Js will think {} is a block then make error notification
console.log(a, b);
*/
//? Nested Obj
/*
let {
  sat: { open: o = 8, close: c = 20 },
} = openingHours;
console.log(o, c);
*/
//*real world example
/*
restaurant.orderDeliver({
  time: '8:40',
  address: '191 Le Van Si',
  mainIndex: 1,
  staterIndex: 2,
});

restaurant.orderDeliver({
  address: '191 Le Van Si',
});
*/
/////////////////////////////////////
//todo Spread opereator
/*
? use Spread opereator for create an arr
let arr = [1, 2, 3];
let arr2 = [...arr, 4, 5];
console.log(arr2);
let str = 'BaoYen';
let myLovestr = [...str, 'is', 'my only love'];
console.log(myLovestr);

*/
/* 
! **"error"**  keep in mind that we can still only use the spread operator when building an array,
! or when we pass values into a function.
//console.log(`${...str} is my only love`)
*/
/*
//*real world example
const promtOrder = [
  prompt('What do you want'),
  prompt('What do you want for toppings ?'),
  prompt('What do you want for seasonings included ?'),
];
restaurant.makePizzaBuffet(...promtOrder);
*/

//? Make a shalow clone by using spread operator
/*
const newrestaurant = { ...restaurant };
newrestaurant.mainMenu.push('rice');
console.log(newrestaurant);
console.log(restaurant);
*/
///////////////////////////
// todo "Rest operator"
//? Basic
/*
const arr = [1, 2, 3];
REST, because the left side of =
const [first, ...rest] = arr;
console.log(arr);
console.log(rest);
console.log(typeof first);
*/
//? Rest operator for Array
/*

const [first, , third, ...others] = [
  ...restaurant.starterMenu,
  ...restaurant.mainMenu,
];
console.log(first);
console.log(third);
console.log(others);
*/
//? Rest operator for Object
/*
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat);
console.log(weekdays);
*/
//* param */ 2) Function
/*
const sum = function (...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
};
let arr1 = [1, 3, 5];
console.log(sum(2, 4));
console.log(sum(...arr1));
*/
//todo Nullish Coalescing Operator
/*
let input;
let caution = function () {
  return console.log(`He has gain ${input}`);
};
caution();
input = 'fail';
caution();
*/
//todo  logical assignment operators

const rest1 = {
  name: 'BaoYen',
  // numGuest: 25,
  numGuest: 0,
};

const rest2 = {
  name: 'TienDat',
  owner: 'DatHa',
};

//? the old ways
/*
rest1.numGuest = rest1.numGuest || 10;
rest2.numGuest = rest2.numGuest || 10;
console.log(rest1, rest2); 
*/
//? OR assignment operators" Giá trị mặc đinh được kích hoạt khi g trị ban đầu là Falsy
/**/
/*
rest1.numGuest ||= 10;
rest2.numGuest ||= 10;
console.log(rest1, rest2);
*/

//? Nullish assignment operators" (null or undefined) Giá trị mặc đinh được kích hoạt khi g trị ban đầu là (null or undefined)
/*
rest1.numGuest ??= 10;
rest2.numGuest ??= 10;
console.log(rest1, rest2);
*/

//? Nullish assignment operators" (null or undefined) Giá trị mặc đinh được kích hoạt khi g trị ban đầu là (null or undefined)
rest1.owner &&= 'anonymous';
rest2.owner &&= 'anonymous';
console.log(rest1, rest2);
