/*Animals: Think of at least three different animals that have a common characteristic.
Store the names of these animals in a list, and then use a for loop to print out the name
of each animal. • Modify your program to print a statement about each animal, such as A dog
would make a great pet. • Add a line at the end of your program stating what these animals
have in common. You could print a sentence such as Any of these animals would make a great
pet! */
let animalName = ["Dog", "Cow", "Cat", "Sheap"];
for (let I = 0; I < animalName.length; I++) {
    console.log(`A ${animalName[I]} would make a great pet!\n`);
}
console.log("Any these animal would make a great pet!");
export {};