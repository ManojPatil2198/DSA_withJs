// write a function arraysAreEqual that takes two arrays
// arr1 and arr2 as input & returns true if the arrays are
//equal (i.e..,contain the same elements in the same order),
//and false otherwise.

//  const arraysAreEqual=(arr1,arr2) =>{
//     if(arr1.length!== arr2.length){
//         return false;
//     }
//     return arr1.every((curVal,index) =>curVal===arr2[index])
//  }
//  console.log(arraysAreEqual([1,2,3], [1,2,3]));
//  //OP:TRUE
//  console.log(arraysAreEqual([1,2,3], [1,2,4]));
//  //OP-false
//  console.log(arraysAreEqual([4,2,3], [4,2,3]));
//  //op-true


const arraysAreEqual =(arr1,arr2) =>{
    if(arr1.length !== arr2.length){
        return false;
    }
     return arr1.every((curVal,index) =>curVal===arr2[index])

}
 console.log(arraysAreEqual([1,2,3] ,[1,2,3]));
 console.log(arraysAreEqual([1,2,3] ,[1,3,3]));
 console.log(arraysAreEqual([1,5,3] ,[1,5,3]));
 