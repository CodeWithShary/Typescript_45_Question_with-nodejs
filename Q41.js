/*Magicians: Make a array of magician’s names. Pass the array to a function called
show_magicians(), which prints the name of each magician in the array */
let magicianName = ["Ali", "Suleman", "Zaid"];
function show_magicians(magicianName) {
    magicianName.forEach(magician => {
        console.log(magician);
    });
}
;
show_magicians(magicianName);
// 2 methord
function show_magician() {
    for (let magiciansNames of magicianName) {
        console.log(magiciansNames);
    }
}
;
show_magician();
export {};
