// write a function called truncatestring that takes two parameters:

// const truncateString =(str,count) =>{
//     if(count <=0) {

//     return str;
//     }
//      else if(str.length > count){
//         return str.slice(0,count).concat("...");
//      }
// };
//  console.log(truncateString("A-tisket a-tasket A green and yellow basket",0));
 
const truncateString =(str,count) =>{

    return count <= 0 ? str :str.slice(0,count).concat("...");
};
 console.log(truncateString("A-tisket a-tasket A green and yellow basket",8));
 