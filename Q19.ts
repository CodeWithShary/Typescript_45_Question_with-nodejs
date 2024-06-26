/* Dinner Guests: Working with one of the programs from Exercises 14 through 18, print 
a message indicating the number of people you are inviting to dinner.
 */

let shrinkingGuestLists : string[] = [ "Ali","Hamid","Mustafa","Ayan","Zoya" ];
  
// print message update list

let UpdateMessage :string ="\n Bad News! your new dinner table won't arrive in time for the dinner,and you have space for only two guests \n ";

console.log(`${UpdateMessage}`);

shrinkingGuestLists.unshift("Musfira","Shaharyar" );


console.log("Update the list:", shrinkingGuestLists);


// remove guesst from the list

while (shrinkingGuestLists.length >2 ) {
   let removeGuest :string | undefined = shrinkingGuestLists.pop()
   if(removeGuest !== undefined){

    console.log(`"Sorry, ${removeGuest} we cant inivited for the dinner"`);
    
   }
}

console.log(shrinkingGuestLists);


for (let i = 0; i < shrinkingGuestLists.length; i++) {
    console.log(`I would like to invit you, ${shrinkingGuestLists[i] } for a dinner `);
    
}

