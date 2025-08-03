// write a function to check if a given string starts with a specific string

//syntaax
//string.startsWith(searchString, position)
//startsWith() ही JavaScript मधील एक string method आहे
//  जी तपासते की एखादी स्ट्रिंग दिलेल्या उपस्ट्रिंगने सुरू होते का.



//using built in method 
// const startsWith =(str,substr) =>{
//     return str.toLowerCase().startsWith(substr.toLowerCase());

// };

//  console.log(startsWith("hello world","hello"));
//  console.log(startsWith("world hello","world"));

  const startsWith =(str,substr) =>{
    return str.toLowerCase().startsWith(substr.toLowerCase());

  }
  
  console.log(startsWith("hello world","hello"));
  console.log(startsWith("hello world","hello"));
  
  

  

// without using built in method 

// const startsWith =(str,substr) =>{
//     return str.toLowerCase().slice(0,substr.length) === substr.toLowerCase();

// };

// console.log(startsWith("hello world","hello"));
// console.log(startsWith("hello world","world"));

