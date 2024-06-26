/* More Guests: You just found a bigger dinner table, so now
 more space is available. Think of three more guests to invite to dinner.
 • Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.*/
console.log("Great News! we found a biggest table for a dinner");
let guestlists = ["Shaharyar", "Ali", "Mustafa", "Ayan", "Furqan"];
// unshift
guestlists.unshift("Musfira");
// splice()
guestlists.splice(Math.floor(guestlists.length / 2), 0, "Hamid");
// push()
guestlists.push("Zoya");
guestlists.forEach(newlist => {
    console.log(`"${newlist}"`);
});
guestlists.forEach(guess => {
    console.log(`"I would like to invite ${guess} for a dinner with me"`);
});
export {};
