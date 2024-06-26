/*Album: Write a function called make_album() that builds a Object describing a music
album. The function should take in an artist name and an album title, and it should return
a Object containing these two pieces of information. Use the function to make three
dictionaries representing different albums. Print each return value to show that Objects
are storing the album information correctly. Add an optional parameter to make_album() that
allows you to store the number of tracks on an album. If the calling line includes a value for
the number of tracks, add that value to the album’s Object. Make at least one new function
call that includes the number of tracks on an album.*/
function make_album(artistname, albumName) {
    return (`${artistname},${albumName}`);
}
let album1 = make_album("Ali Zafar", "Khul ke khel\n");
let album2 = make_album("Atif Aslam", "O saathi \n");
let album3 = make_album("Rahat fateh ali khan", "Zaroori thi\n");
console.log(album1);
console.log(album2);
console.log(album3);
function make_album1(artistname, albumName, numberTacker) {
    return { artistname, albumName, numberTacker };
}
let album4 = make_album1("Ali Zafar", "Khul ke khel ", 68);
let album5 = make_album1("\nAtif Aslam", "O saathi ", 59);
let album6 = make_album1("\nRahat fateh ali khan", "Zaroori thi");
console.log(album4);
console.log(album5);
console.log(album6);
export {};
