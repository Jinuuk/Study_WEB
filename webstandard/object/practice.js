const students = {
  '1' : {name : '강윤석', age : 30, gender : '남'},
  '2' : {name : '권우경', age : 36, gender : '여'},
  '3' : {name : '고승원', age : 25, gender : '남'},
  '4' : {name : '김민철', age : 20, gender : '남'},
  '5' : {name : '박은영', age : 29, gender : '여'},
}

// {
// //객체 순회
//   const cloneObj = {...students};

//   for(let key in students){
//     if(students.hasOwnProperty(key)){
//       if(students[key].gender == '남'){
//         delete cloneObj[key];
//       }
//     }
//   }
//   console.log(cloneObj);
// }

// {
//   // console.log(students);
//   // console.log(Object.keys(students));
//   // console.log(Object.values(students));
//   // console.log(Object.entries(students));

//   const map = new Map(Object.entries(students));
//   // console.log(map);

//   const cloneObj = {...students};

//   map.forEach((value,key,m) =>{
//     if(value.gender == '남'){
//       delete cloneObj[key];
//     }
//   });
//   console.log(cloneObj);

// }

{
  const result = Object.entries(students).filter(ele => ele[1].gender == '여')

  // console.log(result);
console.log(Object.fromEntries(result));

}