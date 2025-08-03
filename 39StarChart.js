
//

// const generateBarChart = (arr) =>{
//     const newArr = arr.map((curElem,index) =>{
//      let star = "";
//      let number = 0;
//      while(number < curElem){
//         star = star + "*";
//         number++;
//      }
//      return`${index + 1} :${star}`;

//     });
//       return newArr.join("\n");
    
// };
//  console.log(generateBarChart([5,3,9,2]));

const generateBarChart =(arr) =>{
    return arr 
    .map((curElem,index) =>{
        return `${index +1} :${"*".repeat(curElem)}`;

    })
    .join("\n");
};
 
console.log(generateBarChart([5,3,4,2]));
