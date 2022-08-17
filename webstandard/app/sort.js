const arr = ['a','p','p','l','e'];
const arr2 = [6,15,27,34,23];

//Array.prototype.sort() 사용
//sort()는 배열 요소를 문자열로 변환하여 각 문자의 유니코드 값에 따라 정렬한다.
//따라서 요소가 숫자인 경우는 콜백함수를 통해 정렬 로직을 반영한다.

const sortByAscfnc = (e1,e2) => e1-e2;
const sortByDescfnc = (e1,e2) => e2-e1;

//1)arr 오름차순 정렬
const answer1 = arr.sort();
console.log(answer1);

//2)arr 내림차순 정렬
const answer2 = answer1.reverse();
console.log(answer2);

//3)arr2 오름차순 정렬
const answer3 = arr2.sort(sortByAscfnc);
console.log(answer3);

//4)arr2 내림차순 정렬
const answer4 = arr2.sort(sortByDescfnc);
console.log(answer4);