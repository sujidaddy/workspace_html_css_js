// 랜더링이 완료된 후 제어
document.addEventListener('DOMContentLoaded', () => {
    // 노드 가져오기
    const btn_shuffle = document.querySelector("#btn_shuffle");
    const btn_selects = document.querySelectorAll(".btn_select");

    let timerId;
    let showtime = 1000;
    const showMessage = (str, time) => {
        clearTimeout(timerId);
        document.getElementById("msg").innerHTML = str;
        if (time > 0)
            timerId = setTimeout(showMessage, time, "");
    }

    const clearBtn = (str) => {
        for (let i = 0; i < btn_selects.length; ++i)
        {
            if(str == "-1")
                btn_selects[i].innerHTML = `${i + 1}`;
            else
                btn_selects[i].innerHTML = str;
        }
    }

    let arrnum = [1, 0, 0, 0, 0, 0, 0, 0, 0];
    let flag = false;
    let count = 0;
    let idx;

    btn_shuffle.addEventListener('click', (e) => {
        e.preventDefault();
        if(flag) return;

        arrnum.sort(() => Math.random() - 0.5);
        flag = true;
        count = 0;
        btn_shuffle.innerHTML = '게임중....';
        clearBtn('-1');
        console.log(arrnum);
        showMessage('<span>폭탄</span>을 찾아주세요.', 0);
    });
    
    for(let col of btn_selects)
    {
        col.addEventListener('click', (e) => {
            e.preventDefault();
            if(!flag)
            {
                showMessage('<span>폭탄</span> 섞기를 해주세요.', 0);
                return;
            }
            idx = parseInt(col.getAttribute('id').replace('col', ''));
            
            if(arrnum[idx] == 1)
            {
                col.innerHTML = '💥';
                showMessage('<span>폭탄</span>입니다.<br><span>게임종료</span>', 0);
                flag = false;
                btn_shuffle.innerHTML = '폭탄섞기';
            }
            else
            {
                if(col.innerHTML != '💖')
                {
                    col.innerHTML = '💖';
                    showMessage('<span>폭탄</span>이 아닙니다.', showtime);
                    ++count;
                    if(count == btn_selects.length - 1)
                    {
                        btn_selects[arrnum.indexOf(1)].innerHTML = '💖';
                        showMessage('<span>폭탄</span>을 모두 찾으셨습니다.', 0);
                        flag = false;
                        btn_shuffle.innerHTML = '폭탄섞기';
                        clearTimeout(timerId);
                    }
                }
            }
        });
    }
});
