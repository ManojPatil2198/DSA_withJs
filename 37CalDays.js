// number of days between two dates

// const calculateDaysBetweenDates = (d1,d2) =>{

//     let curDate = new Date();
//     console.log(curDate.toLocaleTimeString());
    
// }


//  console.log(calculateDaysBetweenDates("2024-01-04","2024-02-31"));
 
// const calculateDaysBetweenDates =(d1,d2) =>{
//     let curDate =new Date();
//     console.log(curDate.toLocaleString());
    
// };
// console.log(calculateDaysBetweenDates("2024-5-25","2025-1-20"));

const calculateDaysBetweenDates =(d1,d2) =>{
    let date1 =new Date(d1); 
    let date2 =new Date(d2); 
    
    let diff= Math.abs(date2 - date1);
    return diff / (24 * 60 * 60 *1000);

}; 
 console.log(calculateDaysBetweenDates("2024-02-05","2024-02-27"));//op-30
 