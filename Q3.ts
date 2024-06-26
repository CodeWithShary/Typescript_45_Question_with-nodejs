/*Name Cases: Store a person’s name in a variable, and then print that person’s name in 
lowercase, uppercase, and titlecase.*/

// lowercase
let personName :string="Muhammad Shaharyar";
console.log("lowercase:"+" "+ personName.toLowerCase() );

// UPPERCASE
console.log("UPPERCASE:" +" "+ personName.toUpperCase());

// TitleCase
console.log("TitleCase:" +" "+ personName.replace(/\bw/g,c=> c.toUpperCase()));


