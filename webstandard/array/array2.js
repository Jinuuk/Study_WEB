{
  const arr = [1,2,3];
  console.log(arr);

  const result = [];
  arr.forEach(ele => result.push(ele*3));
  console.log(result);
  //결과 : [3,6,9]
}

{ //Array.prototype.map()
  //콜백 함수의 반환값들로 구성된 새로운 배열을 반환
  const arr = [1,2,3];
  const result = arr.map(ele=> ele*3);
  console.log(result);
}

{
  const arr = [1,2,3];
  arr.map(ele=> ele*3).forEach(ele => console.log(ele));

  //결과 3,6,9 출력하기
}

{
  
  const arr = [1,2,3,4,5,6,7,8,9,10];
  const result = [];
  arr.forEach(ele => { if(ele%2 == 0) result.push(ele);});
  console.log(result);

  //결과 [2,4,6,8,10]

}
