// sort an array

// write a function to sort array of numbers in an asending order

const sortAscending =(arr) =>{
    return arr.sort();
}
console.log(sortAscending([4,5,3,7,8]));

const Arr =[2,5,6,7,4,1];
   const Arr1 =Arr.sort();
   console.log(Arr1);

   const Arr2 = [2, 5, 6, 7, 4, 10];
const Arr3 = Arr2.sort((a, b) => b - a);// decending order 
// acending order a-b
console.log(Arr3);

   