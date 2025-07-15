// count occurrences of character

// task  
// const countChar = (word, char) => {
//     word = word.toLowerCase();   // दिलेले शब्द छोटे अक्षरात रूपांतरित करतो (Case insensitive साठी)
//     char = char.toLowerCase();   // शोधायचा अक्षर देखील छोटे अक्षरात रूपांतरित करतो

//     const totalCount = word.split("").reduce((accum, curChar) => {
//         if (curChar === char) {   // जर सध्याचं अक्षर 'char' शी जुळत असेल,
//             accum++;              // तर count (accumulator) मध्ये 1 वाढवतो
//         }
//         return accum;             // नाहीतर तसेच count परत करतो
//     }, 0);                        // सुरुवातीला count (accumulator) 0 पासून सुरू

//     return totalCount;            // एकूण count परत करतो
// };

//console.log(countChar("MissIssippi", "I"));  // इथे "MissIssippi" मध्ये 'I' किती वेळा आहे ते मोजतो
//op -//4

// const countChar = (word,char) => {
//     word = word.toLowerCase();
//     char = char.toLowerCase();
//     const totalCount = word.split("").reduce((accum,curChar) =>{
//         if(curChar===char){
//             accum++;
//         }
//         return accum;
//     },0);
//     return totalCount;
// };
//  console.log(countChar("MissIssIppi","I"));
 
// write a function called checkTriangleType that takes  three parameters repressenting the
// lengths of the  sides of a triangle.

// const checkTriangleType =(a,b,c) =>{
//     if(a===b && b===c )  
//         return "equilateral";  // सगळ्या बाजू समान असतील तर "समभुज त्रिकोण"
//     if(a===b || b===c || a===c)  
//         return "isosceles";   // दोन बाजू समान असतील तर "समद्विबाहु त्रिकोण"
//     return "scalene";        // सगळ्या बाजू वेगळ्या असतील तर "विषमबाहु त्रिकोण"
// };

// console.log(checkTriangleType(3,3,3));  // output: isosceles
// console.log(checkTriangleType(3,4,3));  // output: isosceles
// console.log(checkTriangleType(5,8,6));  // output: scalene

const checkTriangleType =(a,b,c) =>{
    if(a===b && b===c)
        return "equilateral";
    if(a===b || b===c || a===c)
        return "isosceles";
        return "scalene";
};
 console.log( checkTriangleType(3,3,3));
 console.log( checkTriangleType(3,4,3));
 console.log( checkTriangleType(3,5,6));
 
 
 
 
