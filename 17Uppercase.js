// write a function to check if a character is uppercase and lowercase

// const isUpperCase =(char) =>{
//     if(char.charCodeAt(0) >= 65 && char.charCodeAt(0)<=90) {
//       return true;
//     }
//     return false;
// }

//  console.log(isUpperCase("S"));
 
const isUpperCase =(char) =>{
    
    return char === char.toUpperCase();

}

  console.log(isUpperCase("W"));
  