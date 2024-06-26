
/* Conditional Tests: Write a series of conditional tests. Print a statement describing each 
test and your prediction for the results of each test. Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/

import { log } from "console";


// test no.1
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')

//  test no.2
console.log("Is car === 'corolla'? I predict False");
console.log(car === 'corolla');

// test no.3
let milkLiter = '200';
console.log("Is milkLiter >= '200'? I predict True.")
console.log(milkLiter >= '200');

// test no.4
console.log("Is milkLiter >= '250'? I predict False.")
console.log(milkLiter >= '250');

// test no.5
let name1 : string = "Shary";
console.log("Is name1.lenght > 0? I predict True.");
console.log(name1.length > 0);

// test no.6
console.log("Is name1.lenght < 5? I predict False.");
console.log(name1.length <5);

// test no.7
let mobileName = "Iphone";
console.log("Is mobileName.toUpperCase() === 'IPHONE'? I predict True.");
console.log(mobileName.toUpperCase() === "IPHONE");

// test no.8
console.log("Is mobileName.toUpperCase() === 'Iphone'? I predict False.");
console.log(mobileName.toUpperCase() === "Iphone");

// test no.9
console.log("Is mobileName.tolowerCase() === 'Iphone'? I predict True.");
console.log(mobileName.toLowerCase() === "iphone");


// // test no.10
console.log("Is mobileName.tolowerCase() === 'IPHONE'? I predict True.");
console.log(mobileName.toLowerCase() === "IPHONE");
