// 리터럴 표기법
let arr1 = [1,2,3];

// Array 생성자를 이용
let arr2 = new Array(1, 2, 3);

// 배열의 크기
console.log(arr1);
console.log(`arr1 : [${arr1}]`);
console.log(`arr1의 요소개수 : ${arr1.length}`);

// 배열 요소 제거
console.log(arr2);
arr2.length = 0;
arr2 = [];
console.log(arr2);

// 배열요소 추가
console.log(arr1);
arr1.push('가');
console.log(arr1);
let arr1Pop = arr1.pop();
console.log(arr1, typeof(arr1));
console.log(arr1Pop, typeof(arr1Pop));

// 배열의 순회
for(let i = 0; i < arr1.length; ++i)
{
    console.log(`arr1[${i}] = ${arr1[i]}`);
}

for(let i in arr1)
{
    console.log(`arr1[${i}] = ${arr1[i]}`);
}

for(let item of arr1)
{
    console.log(`item = ${item}`);
}

arr1.forEach((item, i) => 
{
    console.log(`item[${i}] = ${item}`);
});

// 배열 map 메소드
const arr3 = arr1.map((item) =>
{
    return item * 2;
});
console.log(arr3);

// map은 항상 return값이 필요
// 콜백함수는 파라메터가 1개 일때는 파라메터의 () 생략가능
// 함수내에  return 문만 있으면 함수의 {}와 return 생략 가능
const arr4 = arr1.map(item => item * 2);
console.log(arr4);

// 콜백함수는 파라메터가 2개가 되면 인덱스를 가져옴
const arr5 = arr1.map((item, i) => item * i);
console.log(arr5);

// filter
//const arr6 = arr1.filter(item => item % 2 == 0);
const arr6 = arr1.filter((item) => 
{
    return item % 2 == 0;
})
console.log(arr6);

// map함수 구성
let arr7 = [];
for(let c of arr1)
{
    arr7.push(c*2);
}
console.log(arr7);

// filer함수 구성
let arr8 = [];
for(let c of arr1)
{
    if(c % 2 == 0)
        arr8.push(c);
}
console.log(arr8);

// concat  함수
console.log("concat 함수");
const arr9 = arr7.concat(arr8);
console.log(arr9);

// 전개연산자
console.log("전개연산자");
const arr11 = [...arr7, ...arr8];
console.log(arr11);

// join 함수
let s = arr9.join('-');
console.log("join 함수");
console.log(s);
s = arr9.join('');
console.log(s);

//slice 함수
console.log("slice 함수");
console.log(arr9.slice(1, 3));

//splice 함수
console.log("splice 함수");
arr9.splice(2, 0, 'A');
console.log(arr9);

// sort 함수
console.log("sort 함수");
arr9.sort();
/*arr9.sort((a, b) => b - a);*/
console.log(arr9);

// tailing 쉼표
console.log("tailing 쉼표");
let arr10 = [1,2,];
console.log(arr10);



// 구조분해
let [x, y, z] = arr9;
console.log(`x = ${x}, y = ${y}, z = ${z}`);