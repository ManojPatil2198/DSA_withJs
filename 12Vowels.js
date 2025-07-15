// write a function that takes a string as input and returns 
//the count of vowels in that string. consider 'a','e','i','o','u' as () 
// as vowels(both lowercase and uppercase).

const CountVowels =(str) =>{
    let vowels=['a','e','i','o','u'];
     
    let arr=str.split('');
    console.log(arr);
    

      let count=0;
    for(let char of arr){
        if(vowels.includes(char.toLowerCase())){
            count++;
        }        
    }

    return count;
}
 console.log(CountVowels("hello world"));
 