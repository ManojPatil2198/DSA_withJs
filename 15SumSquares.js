// write a function to calculate the sum of squares of all elements in array 
// for ex-given the array[1,2,3],the function should return 14 beacause 1*1+2*2+3*3=1+4+9=14

// const SumOfSquares =(arr) =>{
//     return arr.reduce((accum,curElem) =>(accum=accum+curElem*curElem),0);

// }

//  console.log(SumOfSquares([1,2,3]));//op-14 
 
  const SumOfSquares =(arr) =>{
    return arr.reduce((accum,curElem) =>(accum =accum+curElem*curElem),0);

  }   

console.log(SumOfSquares([4,5,6]));


//   const SumOfSquares =(arr) =>{
// let sum =0;
// for( let elem of arr){
//     sum= sum + elem * elem;
// }

//  return sum;
//   }

//   console.log(SumOfSquares([1,2,4]));
  

