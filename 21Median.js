// write a function findMedian(arr) that takes an 
//array of numbers as input and returns the median value.

// total number odd yayla havet 

const findMedian = (arr) => {
  // Array sort करा ascending order मध्ये
  arr.sort((a, b) => a - b);

  let length = arr.length;
  let mid = Math.floor(length / 2);

  if (length % 2 === 0) {
    // सम संख्या असल्यास, दोन मधल्या संख्यांचा सरासरी
    return (arr[mid] + arr[mid - 1]) / 2;
  } else {
    // विषम संख्या असल्यास, मधली संख्या
    return arr[mid];
  }
};

console.log(findMedian([5, 3, 4, 7, 6]));      // 5
console.log(findMedian([3, 9, 7, 6, 8, 5]));    // 6.5
