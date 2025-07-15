// write a function called isPowerOfTwo that takes
//an integer num as input returns true if num is
// a power of two,and false otherwise.
// mhnje vargmul sankhya kadhane


const isPowerOfTwo =(num) =>{
    let op =false;
    for( let i=1;i<num;i++){
        if(2**i === num){
            op=true
        }
    }
     return op;
}
 console.log(isPowerOfTwo(8));
 console.log(isPowerOfTwo(3));
 console.log(isPowerOfTwo(4));
 