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
//0.회원의 수
{
  if(data.result == 'success'){
    console.log(data.data.length);
  }
}
//1.회원 이름을 콘솔에 출력하기
{
  if(data.result == 'success'){
    data.data.forEach(ele => console.log(ele.name));
  }
}

//2.회원 나이의 총합 출력하기
{//forEach 사용
  let sum = 0;
  if(data.result == 'success'){
    data.data.forEach(ele => sum += ele.age);
  }
  console.log(sum);
}

{//reduce 사용
  const result = data.data.reduce((acc,ele) => acc + ele.age,0);
  console.log(result);
}

//3.남자회원의 나이 총합 출력하기
{
  // const result = data.data.filter((ele,idx,arr)=> ele.gender == '남' );
  // const final = result.reduce((acc,ele,idx,arr) => acc + ele.age ,0);
  // console.log(final);

  const final = data.data.filter(ele => ele.gender == '남' ).reduce((acc,ele) => acc + ele.age ,0);
  console.log(final);
}

{//forEach 사용
  let sum = 0;
  if(data.result == 'success'){
    data.data.forEach(ele => {if(ele.gender == '남'){
      sum += ele.age;
    }});
  }
  console.log(sum);
}

{//reduce 사용
  const result = data.data.reduce((acc,ele) => {if(ele.gender == '남') {
    return acc + ele.age} else return acc + 0;},0);
  console.log(result);
}

//4.남자회원, 여자회원을 분리하여 배열에 저장
// {//이렇게 하면 안된다.
//   if(data.result == 'success'){
//     const men = [];
//     data.data.filter(ele=>ele.gender == '남').forEach(ele=>men.push(ele));
//     console.log(men);
  
//     const women = [];
//     data.data.filter(ele=>ele.gender == '여').forEach(ele=>women.push(ele));
//     console.log(women);
//   }
// }

{
  const maleMember = data.data.filter(ele=>ele.gender == '남');
  const femaleMember = data.data.filter(ele=>ele.gender == '여');
  console.log(maleMember,femaleMember);
}

{//reduce 사용
  const maleMember = data.data.reduce((acc,ele,idx,arr)=>{
    if(ele.gender == '남') acc.push(ele); return acc;
    },[]);

  const femaleMember = data.data.reduce((acc,ele,idx,arr)=>{
    if(ele.gender == '여') acc.push(ele); return acc;
    },[]);

  console.log(maleMember,femaleMember);
}

//5.A형 회원의 나이 총합 구하기
{//forEach 사용
  let sum = 0;
  if(data.result == 'success'){
    data.data.forEach(ele => {if(ele.blood == 'A'){
      sum += ele.age;
    }});
  }
  console.log(sum);
}

{//reduce 사용
  const result = data.data.reduce((acc,ele) => {if(ele.blood == 'A') {
    return acc + ele.age} else return acc + 0;},0);
  console.log(result);
}

{//forEach + reduce 사용
  const sum = data.data.filter(ele=>ele.blood=='A').reduce((acc,ele)=> acc+ele.age,0);
  console.log(sum);
}

//6.name이 이름3인 회원의 혈액형은?
{//forEach 사용
  let blood = '';
  if(data.result == 'success'){
    data.data.forEach(ele => {if(ele.name == '이름3'){
      blood = ele.blood;
    }});
  }
  console.log(blood);
}

{
  const result = data.data.filter(ele=>ele.name == '이름3');
  console.log(result[0].blood);
}

// 7.혈액형별 인원수 카운트
// 결과 : {A:2, B:1, O:1, AB:1}
{
  const countOfBloodType = data.data.reduce((acc,ele,idx,arr)=>{
    //case1)
    // if(acc[ele.blood]){
    //   ++acc[ele.blood];
    // }else{
    //   acc[ele.blood] = 1;
    // } return acc;

    //case2)
    // acc[ele.blood] = acc[ele.blood] ? ++acc[ele.blood] : 1;
    // return acc;
    
    //case3)
    // acc[ele.blood] = (acc[ele.blood] || 0) + 1;
    // return acc;
  },{});

  console.log(countOfBloodType);
}


//8.남성 회원의 평균 연령
// {
//   const avgOfAge = data.data.reduce((acc,ele,idx,arr)=>{
//     let count = 0;
//     //누적하다 마지막 요소에서 요소 개수로 나누어 반환
//     if(ele.gender == '남'){
//       ++count;
//       return acc + ele.age;
//     } return acc/count;
//   },0);

//   console.log(avgOfAge);
// }

{
  const avgOfAge = data.data.filter(ele=>ele.gender == '남').reduce((acc,ele,idx,arr)=>{
    //누적하다 마지막 요소에서 요소 개수로 나누어 반환
    //case1)
    // if(idx == arr.length-1){
    //   return (acc+ele.age)/arr.length;
    // }
    // return acc+ele.age;

    //case2)
    return idx == arr.length-1 ? (acc+ele.age)/arr.length : acc+ele.age;
  },0);

  console.log(avgOfAge);

}


//9.나이가 가장 많은 회원의 혈액형은?
// {
//   const bloodTypeOfTheOldest = data.data.reduce((acc,ele)=>{
//     //요소의 크기가 큰 값을 누적값으로
//     //case1)
//     // if(acc < ele.age) {
//     //   acc = ele.age;
//     // } 
//     // return acc;
//     return (acc < ele.age) ? ele.age : acc;
//   },0);

//   console.log(bloodTypeOfTheOldest);
// }

{
  const bloodTypeOfTheOldest = data.data.reduce((acc,ele)=>(acc.age < ele.age) ? ele : acc);
  console.log(bloodTypeOfTheOldest.blood);
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
  const processedData = 
  data.data.reduce((acc,ele)=>{
    acc.push({name : ele.name, age : ele.age});
    return acc;
  },[]);

  console.log(processedData);
}

//11.수신된 데이터에 남자 회원이 있는 지 여부 (some)
{
  const isExist = data.data.some(ele => ele.gender == '남');
  console.log(isExist);
}

//12.수신된 데이터가 모두 남자 회원인지의 여부 (every)
{
  const isExist = data.data.every(ele => ele.gender == '남');
  console.log(isExist);
}

{//sort
  const arr = [1,10,2,30];
  // arr.sort();
  // console.log(arr);

  const f = (x,y) => x>y ? 1 : x<y ? -1 : 0; //삼항연산자 중첩
  // const f = function (x,y){
  //   if(x>y){
  //     return 1;
  //   }else if (x<y){
  //     return -1;
  //   }else {
  //     return 0;
  //   }
  // };

  arr.sort(f);
  console.log(arr);
}

//13.여성 회원을 나이 내림차순으로 정렬
{
  const sortedMemeber = data.data.filter(ele => ele.gender=='여')
                                 .sort((e1,e2) => e2.age - e1.age);
  console.log(sortedMemeber);
}

//14.여성이면서 혈액형이 'AB'인 첫번째 회원의 이름은?
{
  let name = data.data.filter(ele => ele.gender == '여' && ele.blood == 'AB')[0].name;
  console.log(name);

  name = data.data.find(ele => ele.gender == '여' && ele.blood == 'AB').name;
  console.log(name);
}