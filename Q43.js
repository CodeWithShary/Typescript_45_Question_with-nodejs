/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great()
with a copy of the array of magicians’ names. Because the original array will be unchanged,
return the new array and store it in a separate array. Call show_magicians() with each array
to show that you have one array of the original names and one array with the Great added to
each magician’s name.*/
// original Array
let MagiciansName = ["Ali", "Suleman", "Zaid"];
// making a copy of array
let MagiciansNameCopy = [...MagiciansName];
function show_magicians(greet) {
    let withgreetings = "";
    for (let item of MagiciansNameCopy) {
        withgreetings += `${greet} ${item}\n`;
    }
    return withgreetings;
}
let myGreeting = show_magicians("hellow");
let makeArray = myGreeting.split(`\n`);
// original array 
console.log(MagiciansName);
console.log(makeArray);
export {};
