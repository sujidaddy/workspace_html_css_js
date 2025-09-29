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

const getPosters = () => {
    const spanList = document.querySelectorAll(".boxname");
    const imgList = document.querySelectorAll(".boxthumb");
    const liList = document.querySelectorAll(".boxli");
    for(let i = 0; i < spanList.length; ++i)
    {
        getPoster(spanList[i].innerHTML, imgList[i]);
        liList[i].addEventListener("mouseover", () => {viewPoster(spanList[i].innerHTML)});
    }
}

// 영화 포스터 썸네일
const getPoster = (name, imgList) => {
    let apiKey = '27062dca74723bc435ae67977f9ba36e';
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${name}`;
    fetch(url)
        .then(resp => resp.json())
        .then(data => {
            let posterUrl;
            if(data.results.length == 0)
                posterUrl = "https://pngtree.com/freepng/no-image-vector-illustration-isolated_4979075.html";
            else
                posterUrl = `https://image.tmdb.org/t/p/w500/${data.results[0].poster_path}`;
            imgList.src = posterUrl;
        })
        .catch(err => console.log(err));
}

// 우측에 포스터 보이기
const viewPoster = (name) => {
    let apiKey = '27062dca74723bc435ae67977f9ba36e';
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${name}`;
    fetch(url)
        .then(resp => resp.json())
        .then(data => {
            let posterUrl;
            if(data.results.length == 0)
                posterUrl = "https://pngtree.com/freepng/no-image-vector-illustration-isolated_4979075.html";
            else
                posterUrl = `https://image.tmdb.org/t/p/w500/${data.results[0].poster_path}`;
            
            const posterimg = document.querySelector("#posterimg");
            posterimg.src = posterUrl;
            console(posterUrl);
        })
        .catch(err => console.log(err));
}

// 박스 오피스 가져오기
const getData = (gdt, box) => {
    let apiKey = 'a1af0c2733560eddcf9b4b33c386c0db';
    let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apiKey}&targetDt=${gdt}`;    
    //fetch
    fetch(url)
        .then(resp => resp.json())
        .then(data => {
            //console.log(data);
            let boxs = data.boxOfficeResult.dailyBoxOfficeList;
            let tags = boxs.map(item => `<li class=boxli onClick="viewPoster('${item.movieNm}')">
                                            <span class=boxrank>${item.rank}</span>
                                            <span class=${item.rankInten == 0 ? 'boxrankstay' : (item.rankInten > 0 ? 'boxrankup' : 'boxrankdown') }>
                                            ${item.rankInten == 0 ? '■' : (item.rankInten > 0 ? '▲' : '▼')}
                                            ${Math.abs(item.rankInten)}</span>
                                            <img class=boxthumb>
                                            <span class=boxname>${item.movieNm.slice(0, 15)}</span></li>`);
            //console.log(tags.join(''));
            box.innerHTML = tags.join('');
            setTimeout(getPosters(), 100);
        })
        .catch(err => console.log(err));

    //console.log(url);
}

// 랜더링이 완료된 후 제어
document.addEventListener('DOMContentLoaded', () => {
    // 노드 가져오기
    const box = document.querySelector("#box");
    const dt = document.querySelector("#dt");

    // 어제 날짜
    let yesterday = getYesterday();
    //console.log(yesterday);
    dt.value = yesterday
    dt.setAttribute("max", yesterday);
    dt.addEventListener('change', () => {
        getData(dt.value.replaceAll("-", ""), box);
    });

    // 초기 박스오피스 가져오기
    getData(yesterday.replaceAll("-", ""), box);
});
