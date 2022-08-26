const tmpData = {
  '1':{id:'1', text:'dodo_1', completed:false },
  '2':{id:'2', text:'dodo_2', completed:true },
  '3':{id:'3', text:'dodo_3', completed:false },
  '4':{id:'4', text:'dodo_4', completed:true },
  '5':{id:'5', text:'dodo_5', completed:false },
};

// {
//   const cloneObj = {...tmpData};
//   console.log(cloneObj);
  
//   //객체 순회
//   for(let key in tmpData){
//     //tmpData 객체 자신만 포함된 속성인지 체크
//     if(tmpData.hasOwnProperty(key)){
//       console.log(key, tmpData[key]);
//       if(tmpData[key].completed){
//         delete cloneObj[key];
//       }
//     }
//   }
  
//   console.log(tmpData, cloneObj);
// }

// {
//   // console.log(Object.keys(tmpData));
//   // console.log(Object.values(tmpData));
//   // console.log(Object.entries(tmpData));

//   const map = new Map(Object.entries(tmpData));
//   // console.log(map);

//   const cloneObj = {...tmpData};
//     map.forEach((value,key,m)=>{
//     if(value.completed){
//       delete cloneObj[key];
//     }
//   });

//   console.log(cloneObj);
// }

// {
//   const result = Object.entries(tmpData)
//                        .filter(entry => entry[1].completed);

//   console.log(result);
//   console.log(Object.fromEntries(result)); //객체로 변환
// }

{
  //객체 리터를 => 배열 Object.entries() *고차함수를 사용하기위해 객체를 배열로 변환한다.*
  //배열 => 객체 리터럴 Object.fromEntries
  const result = Object.fromEntries(Object.entries(tmpData)
                       .filter(entry => entry[1].completed));

  console.log(result);

}

