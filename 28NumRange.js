// write a function called numberRange that genrates an array containing 
// consecutive numbers from a to b (inclusive).

// const numberRange =(a,b) =>{
//     let arr =[];
//     while (a <= b) {
//     arr.push(a);       
//     a++;
//     }
//      return arr;
// };
//   console.log(numberRange(0,5));
//   console.log(numberRange(3,8));
//   console.log(numberRange(-2,3));
  
const numberRange =(a,b) =>{
    let arr=[];
    while (a <= b) {
    arr.push(a);
    a++;        
    }
     return arr;
};
 console.log(numberRange(0,5));
 console.log(numberRange(8,13));
 console.log(numberRange(-3,2));
 