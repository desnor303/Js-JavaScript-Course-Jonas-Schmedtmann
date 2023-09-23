"use strict";
// **function declaration vs expression

// Function declaration function
const test_1 = takeone("test"); // you can do that with no error return
function takeone(object) {
    console.log(`pick this: ${object}`);
}

// function expression
const test_2 = makeOne(); // you can't do that with no error return ( live server to see error coming)

const makeOne = function (object) {
    console.log("hello world!");
};
console.log();
