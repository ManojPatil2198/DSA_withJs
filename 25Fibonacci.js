// write a function to find the nth fibocacci number.
// number chi  addition karne 
// 1+2+3+4+5= 15

const fibocacci =(num) =>{
    if(num<=1){
        return num ;

    }
     else{
        return fibocacci(num-1) + fibocacci(num-2);
     }
};
 console.log(fibocacci(5));
 