const arr = [1,2,3,4,5];

// const result = arr.reduce((acc, ele, idx, arr) => {
//   console.log(acc,ele);
//   return acc + ele; 
// });

// console.log(result);

const result = arr.reduce((acc, cur, idx, arr)=>{
  console.log(acc, cur, idx, arr);
  return acc + cur;
},10);

console.log(result);