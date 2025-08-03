//  extract numbers from a string

// const extractNumbers =(str) =>{
//     let regex = /\d+/g;
//     return str.match(regex);
// };

// console.log(extractNumbers("abc123deff4576"));
// console.log(extractNumbers("no numbers here"));
// console.log(extractNumbers("1a2b3c4d"));


const extractNumbers =(str) =>{

     let regex =/\d+/g;
     return str.match(regex);

};

console.log(extractNumbers("acrb234fg54"));
console.log(extractNumbers("acrb23g44"));
console.log(extractNumbers("no numbers here"));
