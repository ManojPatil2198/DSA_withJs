// check object emptiness

// const isEmptyObject =(obj) =>{
//     return Object.keys(obj).length === 0;

//   //return obj.length === 0 ? `ir's empty :'it's not empty`;
// };
//  console.log(isEmptyObject({name:"manoj"}));

//  console.log(isEmptyObject({}));

//  console.log(isEmptyObject({keyWithNull:null}));

//  console.log(isEmptyObject({keyWithUndefined :undefined}));
 
 
 
 const isEmptyObject = (obj) => {
    return Object.keys(obj).length === 0 ? "it's empty" : "it's not empty";
};

console.log(isEmptyObject({name:"manoj"}));
console.log(isEmptyObject({}));
console.log(isEmptyObject({keyWithNull:null}));
console.log(isEmptyObject({keyWithUndefined :undefined}));
