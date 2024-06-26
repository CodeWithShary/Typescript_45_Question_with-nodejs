/*Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
The function should have one parameter that collects as many items as the function call 
provides, and it should print a summary of the sandwich that is being ordered. Call the 
function three times, using a different number of arguments each time. */

function mysandwiches( ...item : string[]){
return `I want sandwiches of${item}\n`;
}

let collectsofItmes1 = mysandwiches(` chicken`);
let collectsofItmes2 = mysandwiches(` cheeze`,` GarlicMayo`,` Mutton`);
let collectsofItmes3 = mysandwiches(``);

console.log(collectsofItmes1);
console.log(collectsofItmes2);
console.log(collectsofItmes3);
