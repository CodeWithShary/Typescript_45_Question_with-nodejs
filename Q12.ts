/* Greetings: Start with the array you used in Exercise 11, 
but instead of just printing each person’s name, print a message to them.
The text of each message should be the same, but each message should be personalized
with the person’s name.*/

let names1 : string[] =["Shary","Noman", "Sulamn", "Haris","Mustafa"];


for (let i = 0; i < names1.length; i++) {
    console.log(`Hello,${names1[i]}! how are you doing today?`);

}

names1.forEach(friendnames => {
    console.log(`Hi, ${friendnames}! how are you doing today?`);

});

for (const friendnames of names1) {
    console.log(`Dear, ${friendnames}! How are you?`);

    
}