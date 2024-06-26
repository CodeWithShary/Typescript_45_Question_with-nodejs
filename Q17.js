/* Shrinking Guest List: You just found out that your new dinner
 table won’t arrive in time for the dinner, and you have space for only two guests.

 • Start with your program from Exercise 16. Add a new line that prints a message saying that
 you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time
you pop a name from your list, print a message to that person letting them know you’re sorry you can’t
invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure
you actually have an empty list at the end of your program.*/
let shrinkingGuestList = ["Ali", "Hamid", "Mustafa", "Ayan", "Zoya"];
// print message update list
let updateMessage = "\n Bad News! your new dinner table won't arrive in time for the dinner,and you have space for only two guests \n ";
console.log(`${updateMessage}`);
shrinkingGuestList.unshift("Musfira", "Shaharyar");
console.log("Update the list:", shrinkingGuestList);
// remove guesst from the list
while (shrinkingGuestList.length > 2) {
    let removeGuest = shrinkingGuestList.pop();
    if (removeGuest !== undefined) {
        console.log(`"Sorry, ${removeGuest} we cant inivited for the dinner"`);
    }
}
console.log(shrinkingGuestList);
for (let i = 0; i < shrinkingGuestList.length; i++) {
    console.log(`I would like to invit you, ${shrinkingGuestList[i]} for a dinner `);
}
// remove to name from the list 
shrinkingGuestList.splice(0, shrinkingGuestList.length);
//  Print updated list empty
console.log("Update your list :", shrinkingGuestList);
export {};
