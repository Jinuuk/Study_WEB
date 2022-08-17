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

{//reduce
  const result = data.data.reduce((acc,ele) => {
    console.log(acc, ele.age)
    return acc + ele.age;
  },0);

  console.log(result);

  
}