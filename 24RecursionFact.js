// write a function to calculate the factorial of a number.(using recursion)

// recursion :
// when a function calls itself to solve a problem.
 // It is useful when a problem can be broken down into smaller versions of the same problem.

//Recursive Function म्हणजे एखादा function स्वतःलाच पुन्हा पुन्हा कॉल करतो — 
// जोपर्यंत काही ठराविक अट (base case) पूर्ण होत नाही.
//
// factorial mhnje multiplication karane numbers chi
// 1*2*3*4*5=120 

// const factorial =(num) =>{
//     if(num===1){
//         return 1;
//     }
//      else{
//         return num*factorial(num-1);
// //5 => 5*4*3*2*(factorial(1)) recursive
//      }
// };
//  console.log(factorial(5));


const factorial =(num) =>{
    if(num===1) {
        return 1;
    }
     else {
        return num*factorial(num-1);
     }
}
 console.log(factorial(4));
 

// using for loop 
//  const factorial =(num) =>{
//  let fact =1;
//  for(let i=1;i<=num;i++){
//     fact =fact*i;
//  }
//  return fact;

//  }

//  console.log(factorial(5));
 