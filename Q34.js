/*Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a \
array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing
just the name of the pizza. For each pizza you should have one line of output containing a
simple statement like I like pepperoni pizza.
• Add a line at the end of your program, outside the for loop, that states how much you like
pizza. The output should consist of three or more lines about the kinds of pizza you like and
then an additional sentence, such as I really love pizza! */
let favouritePizza = ["Fajita Pizza", "B.B.Q Pizza", "Cheeze Pizza",];
let simpleSatement = "I like to eat";
// simple print name of favouritePizza
for (let i = 0; i < favouritePizza.length; i++) {
    console.log(`${favouritePizza[i]}`);
}
// print name with sentence
for (let i = 0; i < favouritePizza.length; i++)
    if (favouritePizza) {
        console.log(`${simpleSatement}, ${favouritePizza[i]}`);
    }
    else {
        console.log("I dont like Pizza");
    }
// Add a line at the end of your program, outside the for loop
console.log("I really like Pizza, And my favourite flavour is B.B.Q Pizza, Because It soo spicy and full of creamy");
export {};
