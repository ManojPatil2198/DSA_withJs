// remove dupliccates from an array

// const removeDuplicates =(arr) =>{
//     return new Set(arr);

// };
 
//    console.log(removeDuplicates([1,2,3,4,5,3,4,6]));//op-[1,2,3,4,5,6]
//    console.log(removeDuplicates(["a","b","c","b","a"])); //op-['a','b','c']
   

const removeDuplicates = (arr) =>{
    return [...new Set(arr)];
};

 console.log(removeDuplicates([1,2,3,3,4,5,5]));
 console.log(removeDuplicates(["a","b","b","c"]));
 
