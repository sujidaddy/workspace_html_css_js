// 랜더링이 완료된 후 제어
document.addEventListener('DOMContentLoaded', () => {
    // 노드 가져오기
    const btn_shuffle = document.querySelector("#btn_shuffle");
    const btn_selects = document.querySelectorAll(".btn_select");
    let bomb = -1;
    let count = 0;

    let timerId;
    function showMessage(str) {
        clearTimeout(timerId);
        document.getElementById("msg").innerHTML = str;
        if (str.length > 0)
            timerId = setTimeout(showMessage, 1000, "");
    }

    function clearBtn(str) {
        for (let i = 0; i < btn_selects.length; ++i)
        {
            if(str == "-1")
                btn_selects[i].innerHTML = `${i + 1}`;
            else
                btn_selects[i].innerHTML = str;
        }
    }

    btn_shuffle.addEventListener('click', (e) => {
        e.preventDefault();
        if (bomb == -1) {
            bomb = Math.floor(Math.random() * 9);
            console.log(`bomb = ${bomb}`);
            clearBtn("-1");
            showMessage("폭탄을 섞었습니다.");
        }
        else {
            showMessage("이미 섞었습니다.");
        }
    });

    for (let i = 0; i < btn_selects.length; ++i) {
        btn_selects[i].addEventListener('click', (e) => {
            e.preventDefault();
            if (bomb == -1) {
                showMessage('폭탄섞기를 해주세요.');
            }
            else if (i == bomb) {
                if (count == btn_selects.length - 1) {
                    btn_selects[i].innerHTML = "💖";
                    showMessage("<span>클리어</span>");
                    bomb = -1;
                    count = 0;
                }
                else {
                    clearBtn("");
                    btn_selects[i].innerHTML = "💥";
                    showMessage("폭탄발견");
                    bomb = -1;
                    count = 0;
                }
            }
            else {
                if (btn_selects[i].textContent == "💖") {
                    showMessage("이미 선택했습니다.");
                }
                else {
                    btn_selects[i].innerHTML = "💖";
                    showMessage("폭탄이 아닙니다.");
                    ++count;
                }
            }
        })
    }
});
