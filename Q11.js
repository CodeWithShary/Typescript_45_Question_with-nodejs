/* Names: Store the names of a few of your friends in a array
called names. Print each person’s name by accessing each element
in the list, one at a time.*/
// array
// Defines an array of names
let names = ["Shary", "Noman", "Sulamn", "Haris", "Mustafa"];
// loop
//  for each
// for loop
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//  for each
names.forEach(name => {
    console.log(name);
});
// for loop
for (const friendname of names) {
    console.log(friendname);
}
export {};
