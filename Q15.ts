
/* Guest List: If you could invite anyone, living or deceased, to dinner, 
who would you invite? Make a list that includes at least three people you’d 
like to invite to dinner. Then use your list to print a message to each person, 
inviting them to dinner.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name 
of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/


let guestlist1 : string[] = [ "Shaharyar","Ali","Mustafa","Ayan","Furqan"];

// print the name of the person who cant invited for dinner 

let unableattend: string = guestlist1.splice(1,4)[3];
console.log(`${unableattend} not invited for  dinner with me`);

// push 

guestlist1.push("hina");
console.log(`${guestlist1}`);


// print a new message for invited person
guestlist1.forEach(guess => {
    console.log(` "Dear ${guess} ,you are inivted for the dinner party with me " `);

    
    
    
});













