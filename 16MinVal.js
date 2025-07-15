// find the minimum value in  an array 

// write a function findMin that takes an array of numbers 
// as input and returns the minimum value found in the array


//  const findMin = (arr)=>{
//     arr= arr.sort((a,b) =>{
//         if(b > a){
//             return -1;
//         }
//     })
//      return arr[0]; 
//  }
//   console.log(findMin([5,10,2,6,7]));
//   console.log(findMin([-2,-5,-1,-8,3]));

// const findMin =(arr) =>{
//     return Math.min(...arr);
// };
//  console.log(findMin([6,4,3,9,5]));

//   Math.max(...nums)	सर्वात मोठा नंबर परत करतो	Math.max(2, 5, 9)	9
//   Math.min(...nums)	सर्वात लहान नंबर परत करतो	Math.min(2, 5, 9)	2

 
const findMin =(arr) =>{
    return Math.min(...arr);

}
 console.log(findMin([4,7,6,9,8])); 
 
  