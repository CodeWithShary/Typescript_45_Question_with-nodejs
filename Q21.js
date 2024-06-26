// They think of something you could store in a TypeScript Object. Write a program that 
// creates Objects containing these items.
// example 
// type newemplylist = {
//     name:string,
//     idNumber:number,
//     age:number,
//     salary:string,
//     depatment:string,
// }
// let employlist :newemplylist = {
//     name : "shary",
//     idNumber : 234 ,
//     age : 25,
//     salary: "40000",
//     depatment : "IT Department"
// }
let empoly = {
    "empoly1": {
        name: "suleman",
        salary: "50000",
        depatment: "IT Head",
    },
    "employ2": {
        nme: "shary",
        salary: "70000",
        department: "CEO",
    },
};
console.log(empoly.employ2.salary);
export {};
