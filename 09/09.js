// 랜더링이 완료된 후 제어
document.addEventListener('DOMContentLoaded', () => {
    // 노드 가져오기
    const img = document.querySelector("img");
    let answer = -1;
    const inputTxt = document.querySelector("#inputTxt");
    const buttonCheck = document.querySelector("button");

    const buttonClick = (e) => {
        // 자기 자신이 돌지 않도록 방지
        let nextimg = "what";
        let buttontxt = "확인";
        let inputstyle = "block";
        e.preventDefault();
        if (answer == -1) {
            answer = Math.floor(Math.random() * 100) + 1;;
            inputstyle = 'block';
            console.log(`answer = ${answer}`);
        }
        
        if (answer > inputTxt.value) {
            nextimg = "up";
        }
        else if (answer < inputTxt.value) {
            nextimg = "down";
        }
        else {
            nextimg = "good";
            answer = -1;
            buttontxt = "재시작";
            inputstyle = 'none';
            inputTxt.value = "";
        }
        img.src = `../img/${nextimg}.png`;
        buttonCheck.textContent = buttontxt;
        inputTxt.style.display = inputstyle;
        inputTxt.select();
    };

    buttonCheck.addEventListener('click', buttonClick);
});
