
// calculate the average

// write a function called calculateAverage 
// that takes an array of numbers as input and returns 
// the average of those numbers . 

// const calculateAverage =(arr) =>{
//     let total =arr.reduce((accum,curElem) => accum +curElem,0)
//      console.log(total);
//      return total / arr.length;
     
// }
//  console.log(calculateAverage([45,65,7,56]));//op-6

//  const calculateAverage =(arr) =>{
//     let total =arr.reduce((accum,curElem) =>accum + curElem,0)
//     console.log(total);
//      return total / arr.length;
    
//  }
 
//  console.log(calculateAverage([54,34,67,98,38]));
 
const calculateAverage =(arr) =>{
    let total = arr.reduce((accum,curElem) =>accum + curElem,0)
    console.log(total);
    return total / arr.length;
    
}

 console.log(calculateAverage([65,87,76,98,56,70]));
 