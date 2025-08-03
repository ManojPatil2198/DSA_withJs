// mobile number validation 

// const validateIndianMobileNumber =(number) =>{
//     return /^[6-9][\d]{9}$/.test(number);
// };
// console.log(validateIndianMobileNumber("9867543423"));
// console.log(validateIndianMobileNumber("0867543423"));
// console.log(validateIndianMobileNumber("867543423"));


const validateIndianMobileNumber =(number) =>{
    return /^[6-9][\d]{9}$/.test(number);
};

console.log(validateIndianMobileNumber("98766545355"));
console.log(validateIndianMobileNumber("9876654535"));
console.log(validateIndianMobileNumber("0176654535"));
