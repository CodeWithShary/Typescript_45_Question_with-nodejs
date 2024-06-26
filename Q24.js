/* More Conditional Tests: You don’t have to limit the number of tests you create to 10.
If you want to try more comparisons, write more tests. Have at least one True and one False result
for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or
equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array*/
// • Tests for equality and inequality with strings
let name1 = "Shary";
console.log(name1 === 'Shary'); //true
// inequality
console.log(name1 !== "Shary"); //false
// • Tests using the lower case function
console.log(`\nlower case function`);
let value1 = "SHAHARYAR";
let value2 = "shaharyar";
console.log(value1.toLowerCase() === value2); //true
// • Numerical tests involving equality and inequality, greater than and less than, greater than or 
// equal to, and less than or equal to
console.log(`\nnumerical test`);
let num1 = 10;
let num2 = 20;
console.log(num1 === num2); //false
console.log(num1 !== num2); //true
console.log(num1 < num2); //true
console.log(num1 > num2); //false
console.log(num1 <= num2); //true
console.log(num1 >= num2); //false
// • Tests using "and" and "or" operators
console.log(`\nTests using "and" and "or" operators`);
let a = 20;
let b = 40;
let c = 60;
console.log(a < b && b < c); //true
console.log(a < b || b > c); //true
// • Test whether an item is in a array
console.log(`\nitem is in a array`);
const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
const itemTofind = 4;
console.log(array1.indexOf(itemTofind) !== -1); //true
// • Test whether an item is not in a array
console.log(array1.indexOf(10) === -1); //true
export {};
