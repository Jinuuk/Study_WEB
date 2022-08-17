//2개의 매개값을 받아 덧셈하는 함수
{
  const add = (e1,e2) => e1+e2;
  console.log(add(1,2));
}

const num = [1,2,3];
//2,3,4 배수 화살표 함수
{
  const multi2 = e => e*2;
  const multi3 = e => e*3;
  const multi4 = e => e*4;
  
  num.forEach(ele => console.log(multi2(ele)));
  num.forEach(ele => console.log(multi3(ele)));
  num.forEach(ele => console.log(multi4(ele)));
}

console.log('-----m배수함수-----');
//m배수 함수
{
  function multi(m){
    return function(n) {
      return m*n;
    }
  }

  const f2 = multi(2);
  console.log(f2(10));
  console.log(multi(2)(10));
  console.log(multi(3)(10));
}

console.log('-----m배수 화살표 함수-----');
//배수 화살표 함수
{
  const multi = m => n => m*n;

  console.log(multi(2)(10));
  console.log(multi(3)(10));
  console.log(multi(4)(10));
  console.log(multi(100)(10));
}





