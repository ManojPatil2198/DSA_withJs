// filtering valid hex color codes in data processing

const validateHexColor = (hexColor) =>{
    return /^#([A-Fa-f\d]{3}|[A-Fa-f\d]{6})$/.test(hexColor);
};

console.log(validateHexColor("#a3c113"));
console.log(validateHexColor("#fff"));
console.log(validateHexColor("#1234567"));
