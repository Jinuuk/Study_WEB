const data = {
  result:'success', //success:수신 성공, fail:수신 실패
  data:[
    {name:'이름1', gender:'남', age:10, blood:'A'},
    {name:'이름2', gender:'여', age:20, blood:'B'},
    {name:'이름3', gender:'남', age:30, blood:'O'},
    {name:'이름4', gender:'여', age:40, blood:'AB'},
    {name:'이름5', gender:'남', age:50, blood:'A'}
  ]
};

//3.남자회원의 나이 총합 출력하기 (filter + reduce)
{
  const result = data.data.filter(ele => ele.gender == '남').reduce((acc,ele) => acc + ele.age,0);
  console.log(result);
}

//4.남자회원, 여자회원을 분리하여 배열에 저장
//filter
{
  const maleMember = data.data.filter(ele => ele.gender == '남');
  const femaleMember = data.data.filter(ele => ele.gender == '여');

  console.log(maleMember);
  console.log(femaleMember);
}
//reduce
{
  const maleMember = data.data.reduce((acc,ele)=>{
    if(ele.gender == '남') acc.push(ele); return acc;
  },[]);

  const femaleMember = data.data.reduce((acc,ele)=>{
    if(ele.gender == '여') acc.push(ele); return acc;
  },[]);

  console.log(maleMember);
  console.log(femaleMember);
}

//6.name이 이름3인 회원의 혈액형은?
{
  //filter
  console.log(data.data.filter(ele => ele.name == '이름3')[0].blood);
  //find
  console.log(data.data.find(ele => ele.name == '이름3').blood);
}


// 7.혈액형별 인원수 카운트
// 결과 : {A:2, B:1, O:1, AB:1}
{
  // const result = data.data.reduce((acc,ele,idx,arr)=>{
  //   if(acc[ele.blood]){
  //     ++acc[ele.blood];
  //   }else{
  //     acc[ele.blood] = 1;
  //   } return acc;
  // },{})

  // const result = data.data.reduce((acc,ele,idx,arr)=>{
  //   acc[ele.blood] ? ++acc[ele.blood] : acc[ele.blood] = 1;
  //   return acc;
  // },{})

  const result = data.data.reduce((acc,ele,idx,arr)=>{
    acc[ele.blood] = (acc[ele.blood] || 0) +1;
    return acc;
  },{})

  console.log(result);
}

//8.남성 회원의 평균 연령
{
  // const result = data.data.filter(ele => ele.gender == '남').reduce((acc,ele,idx,arr) => {
  //   if(arr.length-1 == idx){
  //     return (acc + ele.age)/arr.length;
  //   }else{
  //     return acc + ele.age;
  //   }
    
  // },0);

  const result = data.data.filter(ele => ele.gender == '남').reduce((acc,ele,idx,arr) => {
    return arr.length-1 == idx ? (acc + ele.age)/arr.length : acc + ele.age;

  },0);
  
  console.log(result);
}

//9.나이가 가장 많은 회원의 혈액형은?
{
  // const result = data.data.reduce((acc,ele) =>{
  //   if(acc < ele.age){
  //     return acc = ele.blood;
  //   }else {
  //     return acc;
  //   }
  // },0);

  // const result = data.data.reduce((acc,ele) =>{
  //   if(acc < ele.age){
  //     acc = ele.blood;
  //   }
  //     return acc;
  // },0);
  // console.log(result);

  const result = data.data.reduce((acc,ele) => (acc.age < ele.age) ? ele : acc);
  console.log(result.blood);
  
}


//10.
// [
//   {name:'이름1', age:10},
//   {name:'이름2', age:20},
//   {name:'이름3', age:30},
//   {name:'이름4', age:40},
//   {name:'이름5', age:50}
// ]

{
  const result = data.data.reduce((acc,ele)=>{
    acc.push({name:ele.name, age:ele.age});
    return acc;
  },[]);

  console.log(result);
}

//11.수신된 데이터에 남자 회원이 있는 지 여부 (some)
{
  const result = data.data.some(ele => ele.gender == '남');
  console.log(result);
}

//12.수신된 데이터가 모두 남자 회원인지의 여부 (every)
{
  const result = data.data.every(ele => ele.gender == '남');
  console.log(result);
}

//13.여성 회원을 나이 내림차순으로 정렬
{
  const newData = data.data.filter(ele => ele.gender == '여').sort((e1, e2)=>e2.age - e1.age);
  console.log(newData);
}

//14.여성이면서 혈액형이 'AB'인 첫번째 회원의 이름은?
//filter
{
  console.log(data.data.filter(ele => ele.gender == '여' && ele.blood == 'AB')[0].name);
}
//find
{
  console.log(data.data.find(ele => ele.gender == '여' && ele.blood == 'AB').name);
}