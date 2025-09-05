const check1 = (e) => {
    //0. 버튼의 submit기능을 없앰
    //e.preventDefault();
    //1. 사용자가 입력한 내용을 가져오기
    const inputV = document.getElementById("txt1").value;
    //console.log(typeof(intputV));
    //console.log(inputV);
    let resultV = "";

    // 문자열 공백 제거
    let inputVt = inputV.replaceAll(' ', '');

    //2. 사용자가 입력한 문자열을 뒤집기
    // for(let i = inputVt.length - 1; i >= 0 ; --i)
    //     resultV += inputVt[i];
    resultV = inputVt.split('').reverse().join('');
    console.log(resultV);

    //3. 사용자가 입력한 문자열과 뒤집은 문자열이 같은지 비교
    // 결과를 input 요소에 출력
    if(inputVt == resultV)
        document.getElementById("txt2").value = `"${inputV}"는 회문입니다.`;
    else
        document.getElementById("txt2").value = `"${inputV}"는 회문이 아닙니다.`;

    // 결과를 div 요소에 출력
    document.getElementById("msg").innerHTML = `<span>"${inputV}"</span>는 회문${inputVt == resultV ? "입니다" : "이 아닙니다"}.`;

}

const check2 = () => {
    // 1. 사용자가 입력한 문자열 가져오기
    const inputV = document.getElementById("txt1").value;
    let inputVt = inputV.replaceAll(' ', '');
    let resultV = inputVt.split('');

    // 2. 문자열을 숫자
    
    let sum = 0; 
    // for(let i = 0; i < resultV.length; ++i)
    // {
    //     console.log(`resultV[${i}] = ${resultV[i]}`);
    //     if(!isNaN(resultV[i]))
    //         sum += parseInt(resultV[i]);
    // }
    
    // for(let c of resultV)
    // {
    //     if(!isNaN(c))
    //         sum += parseInt(c);
    // }

    let num = "";
    for(let i = 0; i < resultV.length; ++i)
    {
        console.log(`resultV[${i}] = ${resultV[i]}`);
        if(isNaN(resultV[i]))
        {
            console.log(`num = ${num}`);
            if(num.length > 0)
                sum += parseInt(num);
            num = "";
        }
        else
        {
            num += resultV[i];
        }
    }
    console.log(`num = ${num}`);
    if(num.length > 0)
        sum += parseInt(num);

    console.log(`sum = ${sum}`);

    document.getElementById("txt2").value = sum;
    document.getElementById("msg").innerHTML = `합계는 <span>"${sum}"</span>.`;
}

const check3 = () => {
    document.getElementById("txt1").value = "";
    document.getElementById("txt2").value = "";
    document.getElementById("msg").innerHTML = "";

    document.getElementById("txt1").focus();
}