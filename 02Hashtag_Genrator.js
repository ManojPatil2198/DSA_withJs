// // write a function genrateHash to accopmplish this task

// const genrateHash= (str) =>{
//     if(str.length>280 || str.trim().length ==0){
//         return false;
//     }
//     str = str.split(" ");
//     console.log(str);
// };

// console.log(genrateHash("my name is thapa technical"));
// // op- "#MyNameIsThapaTechnical"

// const genrateHash =(str)=>{
//     if(str.length > 280 || str.trim().length ==0){
//         return false;
//     }
//     str=str.split(" ");
//     console.log(str);
    

// };
//  console.log(genrateHash("my name is manoj"));
 
const genrateHash= (str) =>{
    if( str.length > 280 || str.trim().length ==0){
        return false;
    }
     str=str.split(" ");
     str=str.map((curElem) =>
     curElem.replace(curElem[0],curElem[0].toUpperCase())
     );
      str=`#${str.join("")}`;// # joint name print houn yeil 
     console.log(str); // op-#MyNameIsManoj
    };
   console.log(genrateHash("my name is manoj"))
   // pratek word che first letter capital hot 
   //op -[ 'My', 'Name', 'Is', 'Manoj' ]

