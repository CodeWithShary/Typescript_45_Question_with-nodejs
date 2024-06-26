/* Guest List: If you could invite anyone, living or deceased, to dinner, who would 
you invite? Make a list that includes at least three people you’d like to invite to dinner. 
Then use your list to print a message to each person, inviting them to dinner. */

// make a guest list 
let guestlist : string[] = [ "Shaharyar","Ali","Mustafa"];

// inited for a dinner
for (let I = 0; I < guestlist.length; I++) {
    console.log(`"I would like to invite ${guestlist[I]} for a dinner with me" `);
    
    
}


//map()

let invite =guestlist.map(number=>`"I would like to invited ${number}, for a dinner"`);
console.log(invite);


