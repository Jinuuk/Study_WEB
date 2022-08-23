const person = {
  name : '홍길동',
  age:30
}



// person 객체를 반환하는 함수
{
  //1)함수 선언문
  function getPerson(){
    return person;
  }

  const {name,age} =getPerson();
  console.log(name,age);

}
{
  //2)함수 표현식
  const getPerson = function(){
    return person;
  }

  const {name,age} =getPerson();
  console.log(name,age);


}
{
  //3)화살표 함수v2
  const getPerson = () => person;
  
  const {name,age} = getPerson();
  console.log(name,age);  
}

{
  //3)화살표 함수v3
  const {age,name}= (() => person)();
  console.log(name,age);  
}
