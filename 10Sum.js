// write a function that takes a number as input &  
// returns the sum of its digits

// const SumOfDigits=(num) =>{
//   let arr=Array.from(String(num),Number)
//   console.log(arr);
//   return arr.reduce((accum,curElem) =>accum + curElem,0)
  
// }
//  console.log(SumOfDigits(1234));


const SumOfDigits =(num) =>{
    let arr= Array.from(String(num),Number)
    console.log(arr);
    return arr.reduce((accum,curElem) => accum + curElem,0)

}
 console.log(SumOfDigits(4567));
 