// //longest word in string

// const  findLongestWord =(str) =>{
//     if(str.trim().length= 0){
//         return false;
//     }

//      words=str.split(" ");
//      words=words.sort((a,b) =>a.length-b.length)// unicode values nusar print 
//      console.log(words);// Unicode value (or code point) is the unique number assigned to a character.
     
// };
//  console.log(findLongestWord(" My name Is manoj and my age is 23"));
 
const findLongestWord = (str) => {
    if (str.trim().length === 0) {
        return false;
    }

    words = str.split(" ");
    //words = words.sort((a, b) => a.length - b.length); // लांबीच्या descending क्रमाने sort
    //console.log(words); // debugging साठी
    //return words[0]; // सर्वात लांब शब्द परत करतो
   return words.reduce ((accum,currWord)=>
   (currWord.length>accum.length ? currWord:accum),
 "" 
);
};

console.log(findLongestWord(" My name Is manoj and my age is 23"));


