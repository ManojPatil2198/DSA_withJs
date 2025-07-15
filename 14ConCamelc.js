// write a function to convert a string to camelcase & snake_case

// const toCamelCase =(str) =>{
//     str=str.trim().split(" ");
    
//     str=str.map((curElem,index) =>{
//         if(index ===0){
//             return curElem.toLowerCase();
//         } 
//         else{
//             return curElem.charAt(0).toUpperCase() + curElem.slice(1).toLowerCase();
//         } 
//     });
//     return str.join("");
// };
//  console.log(toCamelCase("hello world aLl"));
 
 // using chaining method 


 const toCamelCase = (str) => {
    return str
    .trim() // सुरुवाती व शेवटची जागा (spaces) काढते
    .split(" ") // string ला space नुसार वेगळ्या शब्दांमध्ये विभाजित करते
    .map((curElem, index) => { // प्रत्येक शब्दावर प्रक्रिया करते
        if(index === 0) {
            return curElem.toLowerCase(); // पहिला शब्द लहान अक्षरांत ठेवते
        } else {
            // दुसऱ्या पासून पुढच्या प्रत्येक शब्दाचा पहिला अक्षर मोठा आणि उरलेले लहान
            return curElem.charAt(0).toUpperCase() + curElem.slice(1).toLowerCase();
        }
    })
    .join(""); // सगळे शब्द परत एकत्र जोडते
}

console.log(toCamelCase("hello world aLl"));

  