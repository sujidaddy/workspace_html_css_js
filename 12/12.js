// 어제 날짜 가져오기
const getYesterday = () => {
    let yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    /*
    let year = yesterday.getFullYear();
    let month = yesterday.getMonth() + 1;
    let day = yesterday.getDate();

    let ret = `${year}-${String(month).padStart(2, 0)}-${String(day).padStart(2, 0)}`;
    return ret;
    */
    return yesterday.toISOString().slice(0, 10);
}

// 박스 오피스 가져오기
const getData = (gdt) => {
    let apikey = 'a1af0c2733560eddcf9b4b33c386c0db';
    let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.xml?key=${apikey}&targetDt=${gdt}`;
    console.log(url);
    //fetch
    fetch(url)
        .then(resp => console.log(resp))
        .catch(err => console.log(err));
}

// 랜더링이 완료된 후 제어
document.addEventListener('DOMContentLoaded', () => {
    // 노드 가져오기
    const box = document.querySelector("#box");
    const dt = document.querySelector("#dt");

    // 어제 날짜
    let yesterday = getYesterday();
    console.log(yesterday);
    dt.value = yesterday
    dt.setAttribute("max", yesterday);

    // 초기 박스오피스 가져오기
    getData(yesterday.replaceAll("-", ""));
});
