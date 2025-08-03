// write a function called calculate Mean that takes an array of numbers
// as input and returns the mean(average) of those numbers.


// const calculateMean= (arr) =>{
//   if(arr.length===0){
//     return 0;
//   }
//    let sum =arr.reduce((accum,curElem) => accum + curElem,0);
//    console.log(sum);
   
// };
//  console.log(calculateMean([33,44,5,67,98]));
 
//  const calculateMean = (arr) => {
//   if (arr.length === 0) {
//     return 0;
//   }
//   let sum = arr.reduce((accum, curElem) => accum + curElem, 0);
//   let mean = sum / arr.length;
//   return mean;
// };

// console.log(calculateMean([33, 44, 5, 67, 98]));

const calculateMean =(arr) =>{
  if(arr.length === 0){
    return 0;
  }
  let sum=arr.reduce((accum,curElem) =>accum + curElem,0);
  return  sum / arr.length;
};
console.log(calculateMean([2,3,4,5,6,7,8,8]));

