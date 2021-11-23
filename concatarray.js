const addToBatch = (arr, num) => {
  if (arr.length > 10) {
    return arr;
  };
  return arr.concat(num);
};
console.log(addToBatch([1,2,3],4));
console.log(addToBatch([1,2,3,4],[5,6]));


// or

// const addToBatch = (arr, num) => {
//   if (arr.length > 5) {
//     return arr;
//   };
//   arr.push(num);
//   return arr;
// };
// ​
// console.log(addToBatch([1, 2, 3], 4));
// console.log(addToBatch([1, 2, 3, 4, 5, 6], 7));