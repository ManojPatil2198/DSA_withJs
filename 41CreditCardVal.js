// validate a credit card number(luhn algorithm)

const validateCreditCard = (str) =>{
//validateCreditCard ही फंक्शन आहे जी एक str (string) म्हणजेच क्रेडिट कार्ड नंबर घेते.


    str =str.replace(/\D/g,"");
//या ओळीत, str मधून सर्व संख्या नसलेल्या (non-digit) वर्णांना (\D) काढून टाकतो. म्हणजेच स्पेस, डॅश, अक्षरे इ.

    let revNum ="";
    for(let i=str.length -1;i >= 0;i--) {
        revNum =revNum + str[i];
    }
// हे लूप स्ट्रिंग उलटी (reverse) करतं. कारण Luhn algorithm मध्ये उजव्या बाजूने सुरुवात करावी लागते.


    let doubleNum =revNum 
    .split("")
    .map((curDigit,index) =>{
     if(index %2 !=0){
        curDigit = curDigit * 2;
//.map() वापरून प्रत्येक अंकावर प्रक्रिया केली जाते:
//समक्रमांक (odd index) वरील अंक दुहेरी (double) केला जातो.
//जर दुहेरी केल्यानंतरचा अंक 9 पेक्षा जास्त असेल, तर 9 वजा केला जातो.
//उदाहरण: 6 × 2 = 12 → 12 - 9 = 3
        if(curDigit > 9){
            curDigit = curDigit - 9;
        } else{
            curDigit =curDigit ;
        }
     }
     return curDigit;
    })
      .reduce((accum,curElem) => accum + Number(curElem),0);
      //सर्व अंकांची बेरीज (sum) केली जाते.


      console.log(doubleNum);
      
     return doubleNum %10 ===0;
// जर ती बेरीज 10 ने भाग जात असेल (modulus), तर कार्ड नंबर वैध आहे.

};

    console.log(validateCreditCard("4539 1488 0343 6467"));
    