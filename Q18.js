/* Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed. */
let placeToVisit = ["Suadia Arab", "Turkey", "Austalia", "Newzealand", "Iran"];
"\n";
// print in the original order 
console.log("originalOrder", placeToVisit);
// • Print your array in alphabetical order without modifying the actual list.
console.log(" Alphabetical order ", placeToVisit.slice().sort());
// • Show that your array is still in its original order by printing it.
console.log("originalOrder", placeToVisit);
// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse Alphabetical order", placeToVisit.slice().sort().reverse());
// • Show that your array is still in its original order by printing it again.
console.log("original Order", placeToVisit);
// • Reverse the order of your list. Print the array to show that its order has changed.
let orderMessage = "Its order has changed";
console.log(orderMessage);
console.log("Reverser Order", placeToVisit.reverse());
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("originalOrder", placeToVisit.sort());
console.log(placeToVisit);
//  • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log(orderMessage);
console.log(placeToVisit);
export {};
// console.log("Stored in Alphabetical Order",placeToVisit.sort());
// // • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// console.log("Reverse Alphabetical Order", placeToVisit.reverse());
