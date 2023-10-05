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

//? Nullish assignment operators" (null or undefined) Giá trị mặc đinh được kích hoạt khi g trị ban đầu là truthy
/*
rest1.owner &&= 'anonymous';
rest2.owner &&= 'anonymous';
console.log(rest1, rest2);
 */

//////////////////////////////////////

//todo Coding Challenge

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'T hiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
*/
//! Coding Challenge #1
/*

// 1.
const [players1, players2] = game.players;
// 2.
const [gkTeam1, ...fieldPlayersTeam1] = players1;
const [gkTeam2, ...fieldPlayersTeam2] = players2;
console.log(gkTeam1, fieldPlayersTeam1);
console.log(gkTeam2, fieldPlayersTeam2);
// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
// 4.
const players1Final = [...players1, 'T hiago', 'Coutinho', 'Perisic'];
console.log(players1Final);
// 5.
const { team1, x: draw, team2 } = game.odds;
// 6.
let printGoals = (...player) => {
  console.log(player);
  console.log(player.length);
};

// test 6.
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);
// 7.
team1 < team2 && console.log('team 1 win');
team2 < team1 && console.log('team 2 win');
*/

//todo Looping Arrays: The for-of Loop
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (let item of menu) console.log(`this ${item} is very delicious`);
for (let [index, ele] of menu.entries()) console.log(`${index + 1}: ${ele}`);
*/

//todo ES6 Enhanced Object Literals

/*
//? Object Literals
const BaoYen = {
  name: 'BaoYen',
  workingHours: {
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

//? ES6 Enhanced Object Literals
//* just declare a simple Obj
let workingHours = {
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
};
const myLove = [`the one i love`, `codename angle`, 'theOnlyLove'];
const BaoYen = {
  [myLove[2]]: 'BaoYen', //** Add property's name in Obj "BaoYen" by "ES6 Enhanced Object Literals"
  workingHours, // ** Add property in Obj "BaoYen" by "ES6 Enhanced Object Literals"
  // **  Adding method "loveMe" by "ES6 Enhanced Object Literals"
  loveMe() {
    console.log(`Dat, I love you`);
  },
};
console.log(BaoYen);
BaoYen.loveMe();

*/

//todo Optional chaining

/* 
//? Method
console.log(restaurant.order(1, 0));
console.log(restaurant.order?.(1, 0) ?? 'Command not found');
console.log(restaurant.orderrrrr?.(1, 0) ?? 'Command not found');

//? Obj

let arr = [
  {
    name: 'dat',
  },
];
console.log(arr[0]?.name ?? 'this arr is empty');
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
//! Answer Coding Challenge #2
/* 
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  // 2.
  constgetAverage(...values) {
    const total = values.reduce((a, b) => a + b, 0);
    console.log(total / values.length);
  },
  // 3.
  printOdds(entries) {
    for (let [team, point] of entries)
      console.log(`Odd of victory ${this[team] ?? 'draw'}: ${point}`);
  },
};

// 1.
for (let [index, player] of game.scored.entries())
  console.log(`Goal ${index + 1}: ${player}.`);
// 2.

const oddsValues = Object.values(game.odds);
game.constgetAverage(...oddsValues);
// 3.

game.printOdds(Object.entries(game.odds));

*/

//Todo "SETS" {...}
//*Basic
//? Declare variable Set type

// let orderSet = new Set(['Pizza', 'Bread', 'Pasta', 'Pizza', 'Pizza', 'Bread']);
// console.log(orderSet);

//? turn set to arr
/*
const orderSetArr = [...orderSet];
console.log(orderSetArr);
*/

//* some type of "Set" 's Method

/*
//? .size , just like .length of Arr.
console.log(orderSet.size); //log: 3;

//? .has, check (ele) is avalable in SETS {...}, Boolean output

console.log(orderSet.has('orange')); //output: false
console.log(orderSet.has('Pizza')); //output: true

//? .add, just add a UNIQUE in SETS {...} otherwise, nothing happen

orderSet.add('Pizza'); //output: {'Pizza', 'Bread', 'Pasta'}, not have any new ele
console.log(orderSet);

orderSet.add('Rorsta'); //output: {'Pizza', 'Bread', 'Pasta', 'Rorsta'}, new ele  'Rorsta' has been add to orderSet Set
console.log(orderSet);
//? .delete, just delete a ele in SETS {...} otherwise, nothing happen

orderSet.delete('Pizza');
console.log(orderSet);
*/
//* Loop "for( ... of ...) "
// for (let ele of orderSet) console.log(ele);

//* Example
/*
const staff = [
  'Waiter',
  'Chef',
  'Boss',
  'Manager',
  'Waiter',
  'Waiter',
  'Waiter',
  'Chef',
];

const unistaff = [...new Set(staff)];
console.log(unistaff);

*/

// Todo "Maps" {...}
//*Basic
// Method #1 to create a Map obj
const picnicBags = new Map(); // then just .set to add more prototype in it
//methodd #2 to create a Map objt
const question = new Map([
  ['ques1', 'what is the most popular Programing Language in the world'],
  ['ques2', 'why are you so pretty'],
  [1, 'Javascript'],
  [2, 'Java'],
  [3, 'Python'],
  [true, 'correct'],
  [false, "Let's try again"],
]);
console.log(question);
//? set Method
/*
picnicBags.set('write', 'pencil');
picnicBags
  .set('girlfriend', 'BaoYen')
  .set(true, 'Make love')
  .set(false, 'Pervert!!');
console.log(picnicBags);
*/
//? get  Method
/* 
console.log(picnicBags.get('protection'));
console.log(picnicBags.get(false));
*/
//! caution with Array 'Keys' to .get
let miniBags = ['ele1', 'ele2'];
/* 
picnicBags
  .set(miniBags, `BaoYen \'stuff`)
  .set(['ele3', 'ele4'], `Datha \'stuff`);
console.log(picnicBags.get(miniBags));
console.log(picnicBags.get(['ele3', 'ele4'])); // Because the arr ['ele3', 'ele4'] in 'set' and "get" is different in heap potition memory
*/

//* Convert Obj to Map
//? Example
/*
const mapOpenHour = new Map(Object.entries(restaurant.openingHours));
console.log(mapOpenHour);
*/
//* Loop
//? Example
/*
const answer = Number(prompt('What is you decision'));
console.log(`Your answer is ${question.get(answer)}`);
//*my Ways
// for (let [key, value] of question)
//   if (typeof key === 'number' && key === answer)
//     console.log(`Answer ${key}: ${value}`);
*/
//*  Convert Map to Arr
const questionArr = [...question];
console.log(questionArr.length); // .length is arr method, not Map Method
