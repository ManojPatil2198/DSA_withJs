// simple currency converter
 
//   const rates = {
//     USD: 1,    //  बेस चलन
//     EUR: 0.9,  // 1 USD = 0.9 EUR
//     GBP: 0.8,  // 1 USD = 0.8 GBP
//     INR: 82    // 1 USD = 82 INR
// };

// const ConvertCurrency = (amount, fromCurrency, toCurrency) => {
//     // पहिल्यांदा अमाउंटला USD मध्ये रूपांतर करा
//     let amountInUSD = amount / rates[fromCurrency];

//     // नंतर USD मधून target currency मध्ये रूपांतर करा
//     let convertedAmount = amountInUSD * rates[toCurrency];

//     return convertedAmount;
// };

// // वापर उदाहरण:
// console.log(ConvertCurrency(100, "GBP", "EUR"));
// Output: 112.5
//op - output will depend on the rates provided

const rates ={
     USD : 1, 
     EUR :0.9,
     GBP :0.8,
     INR : 82

};


  const ConvertCurrency =(amount ,fromCurrency,toCurrency) =>{
    let amountInUSD =amount / rates [fromCurrency];
    let convertedAmount =amountInUSD * rates [toCurrency ];
    
    return convertedAmount ;
  };

  console.log(ConvertCurrency (100,"GBP","EUR"));
  
  