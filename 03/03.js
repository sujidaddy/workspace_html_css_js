// 기존방식
// function Hello(n) {
//     if(n == 1)
//         alert("안녕하세요.");
//     else
//         alert("반갑습니다.");

//     console.log("콘솔출력 : " + n);
// }

const Hello = (n) => {
    // == 는 값만 비교 type이 상관없음
    // ===는 type까지 비교
     if(n === "1")
         alert("안녕하세요.");
     else
         alert("반갑습니다.");

     console.log("콘솔출력 : " + n);    
}

const CheckVar = () => {
    // x = 10;

    // var x;
    let x;
    x = 'test'
    const y = 40;
    //console.log("x = " + x);
    console.log(`x = ${typeof(x)}, y = ${typeof(y)}`);
    console.log(`문자열 ${x}은 문자인가요? ${isNaN(x) ? "예" : "아니오"}`);
    console.log(`문자열 ${y}은 문자인가요? ${isNaN(y) ? "예" : "아니오"}`);
}