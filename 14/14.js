let numOfRows = 10;
let pageNo = 1;
let MobileOS = 'ETC';
let MobileApp = 'AppTest';
let arrange = 'A';
let _type = 'json';
let totalCount = 0;
let serviceKey = '2cff2e258e29ed84bb63d34cc6e6f3bb0fddea2816f5c5b9148cb659019c8d03';
const getData = (txt1, content) => {
    content.innerHTML = '';
    let keyword = encodeURI(txt1);
    let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?numOfRows=${numOfRows}&pageNo=${pageNo}&MobileOS=${MobileOS}&MobileApp=${MobileApp}&arrange=${arrange}&keyword=${keyword}&_type=${_type}&serviceKey=${serviceKey}`;
    //console.log(url);
    fetch(url)
    .then(resp => resp.json())
    .then(data => {
        //console.log("pageNo = " + pageNo);
        let items = data.response.body.items.item;
        numOfRows = data.response.body.numOfRows;
        pageNo = data.response.body.pageNo;
        totalCount = data.response.body.totalCount;

        btBefore.style.visibility = 'hidden';
        btAfter.style.visibility = 'hidden';

        if((pageNo - 1) * 10 + numOfRows < totalCount)
        {
            // 다음 버튼
            btAfter.style.visibility = 'visible';
        }
        if(pageNo > 1)
        {
            // 이전 버튼
            btBefore.style.visibility = 'visible';
        }
        //console.log(data.response.body);
        let tags = items.map(item => `<img class='img' src='${item.galWebImageUrl}' alt='${item.galTitle}'/>`);
        content.innerHTML = tags.join('');
    })
    .catch(err => content.innerHTML = '검색된 사진이 없습니다.');
}

// 랜더링이 완료된 후 제어
document.addEventListener('DOMContentLoaded', () => {
    // 노드 가져오기
    const txt1 =  document.querySelector("#txt1");
    const btOk =  document.querySelector("#btOk");
    const btCancel =  document.querySelector("#btCancel");
    const btBefore =  document.querySelector("#btBefore");
    const btAfter =  document.querySelector("#btAfter");
    const content =  document.querySelector("#content");
    btBefore.style.visibility = 'hidden';
    btAfter.style.visibility = 'hidden';
    txt1.addEventListener('keydown', (e) => {
        if(e.key == 'Enter')
        {
            e.preventDefault();
            getData(txt1.value, content, btBefore, btAfter);
        }
    });
    btOk.addEventListener('click', () => {
        getData(txt1.value, content, btBefore, btAfter);
    });

    btCancel.addEventListener('click', () => {
        txt1.value = '';
        content.innerHTML = '';
        btBefore.style.visibility = 'hidden';
        btAfter.style.visibility = 'hidden';
    });

    btAfter.addEventListener('click', () => {
        ++pageNo;
        getData(txt1.value, content, btBefore, btAfter);
    });

    btBefore.addEventListener('click', () => {
        --pageNo;
        numOfRows = 10;
        getData(txt1.value, content, btBefore, btAfter);
    });

});
