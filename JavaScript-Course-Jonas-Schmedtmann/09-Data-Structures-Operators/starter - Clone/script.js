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
};

const array = [1, 2, 3];
let [a, b, c] = array;
console.log(a, b, c);

[a, b] = [b, a];
console.log(a, b);
// receive 2 value from a function
let [starterMenu, mainMenu] = restaurant.order(2, 1);
console.log(starterMenu, mainMenu);
// Nested destructuring
let arr2 = [1, 2, [5, 6]];
let [i, , [k, l]] = arr2;
console.log(k, l);
// default value
const [p, q, r = 3] = [1, 2, 3];
console.log(p, q, r);
