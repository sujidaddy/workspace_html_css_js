// 랜더링이 완료된 후 제어
document.addEventListener('DOMContentLoaded', () => {
    // 노드 가져오기
    const srcSel = document.querySelector("#srcSel");
    const desSel = document.querySelector("#desSel");
    const srcText = document.querySelector("#srcText");
    const desText = document.querySelector("#desText");
    const srcLabel = document.querySelector("[for=srcText]");
    const desLabel = document.querySelector("[for=desText]");

    // 공통함수
    const selChange = () => {
        desSel.value = (srcSel.value == "℃") ? "℉" : "℃";
        srcSel.value = (desSel.value == "℃") ? "℉" : "℃";

        srcText.value = "";
        srcLabel.textContent = srcSel.value;

        desText.value = "";
        desLabel.textContent = desSel.value;
    };

    const calValue = () => {
        let temp = 0;
        if (srcSel.value == "℃") {
            // 섭씨 -> 화씨
            temp = parseFloat(srcText.value) * 9 / 5 + 32;
        }
        else {
            // 화씨 -> 섭씨
            temp = (parseFloat(srcText.value) - 32) / 9 * 5;
        }
        if (!isNaN(temp))
            desText.value = parseFloat(temp.toFixed(2));
        else
            desText.value = "";
    };

    // select 변경시
    srcSel.addEventListener('change', selChange);
    desSel.addEventListener('change', selChange);

    // input txt1의 값이 입력이 되면
    srcText.addEventListener('input', calValue);
});
