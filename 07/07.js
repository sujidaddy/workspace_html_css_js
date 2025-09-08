// 랜더링이 완료된 후 제어
document.addEventListener('DOMContentLoaded', () => {
    // 노드 가져오기
    // 주사위 이미지 가져오기
    const diceImgs = document.querySelectorAll("#diceDiv  img");
    // 버튼 가져오기
    const bts = document.querySelectorAll("#btDiv > button");

    // 버튼 클릭
    //console.log(diceImgs);
    
    /*
    for (let i = 0; i < bts.length; ++i) {
        bts[i].addEventListener('click', () => {
            let n = Math.floor(Math.random() * 6) + 1; // 1~6까지
            diceImgs[0].setAttribute('src', `../img/${n}.png`);
            diceImgs[0].setAttribute('alt', `${n}`);
            diceImgs[1].setAttribute('src', `../img/${(i + 1)}.png`);
            diceImgs[1].setAttribute('alt', `${(i + 1)}`);
            console.log((i + 1) == n ? "맞음" : "틀림");
            document.querySelector("#msg").innerHTML = (i + 1) == n ? "맞음" : "틀림";
        });
    }
    */
   const comImg = diceImgs[0];
   const useImg = diceImgs[1];
   for(let bt of bts)
   {
        bt.addEventListener('click', () => {
            let n = Math.floor(Math.random() * 6) + 1; // 1~6까지
            comImg.setAttribute('src', `../img/${n}.png`);
            comImg.setAttribute('alt', `${n}`);
            let index = parseInt(bt.innerHTML.charAt(0));
            useImg.setAttribute('src', `../img/${index}.png`);
            useImg.setAttribute('alt', `${index}`);
            console.log(index === n ? "맞음" : "틀림");
            document.querySelector("#msg").innerHTML = index == n ? "<div class='spo'>맞음</div>" : "<div class='spx'>틀림</div>";
        });
   }
});
