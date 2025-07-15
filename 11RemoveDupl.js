// write a function that takes an array of integers as input
// and removes any duplicates elements,returning a new array
//with only the unique elements.

// const removeDuplicates = (arr) =>{
//     let newArr =[...new Set(arr)]
//     return newArr
// // Set ही JS ची एक collection आहे जी फक्त unique values ठेवते.
// }
// // console.log(removeDuplicates([1,2,3,4,5,5,6,]));
// //console.log(removeDuplicates([1,2,3,4,4,5,6,]));
//  console.log(removeDuplicates([5,6,7,7,8,]));
//  console.log(removeDuplicates([]));
  
// const removeDuplicates =(arr) =>{
//     let newArr =[... new Set(arr)]
//     return newArr
// }
//  console.log(removeDuplicates([1,2,3,3,4]));
//  console.log(removeDuplicates([]));

 
const removeDuplicates =(arr) =>{
    let newArr =[... new Set(arr)]
    return newArr
}
 console.log(removeDuplicates([1,2,4,5,5,]));
 console.log(removeDuplicates([]));
 