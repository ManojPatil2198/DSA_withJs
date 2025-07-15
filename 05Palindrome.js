//write a function to determine wheather a given string is
// a palindrome or not. A palindrome is a word, phrase,number,
//or other sequence of characters that reads the same forward
// and backword, ignoring spaces, puntuation,and capitalization.

//Palindrome म्हणजे असं शब्द किंवा वाक्य जे मागून आणि पुढून एकसारखं वाचलं जातं.

const isPalindrome = (str) =>{
    str = str.toLowerCase().replace(/\W/g,"");
    ///\W/g वापरल्यामुळे non-word characters 
    // (स्पेस, कॉमा, punctuation) काढले जातात.
    let r_str=str.split("").reverse().join("")
    console.log(r_str);
    return str === r_str ? true:false;
}
console.log(isPalindrome("A man, a plan, a canel, Panama"));// op-true
console.log(isPalindrome("racecar"));//op-true
console.log(isPalindrome("hello"));//op-true



