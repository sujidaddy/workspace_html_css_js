// 랜더링이 완료된 후 제어
document.addEventListener('DOMContentLoaded', () => {
    // 노드 가져오기
    const target_img = document.querySelector("#target_img");
    const btn_images = document.querySelectorAll(".btn_img");
    const btn_left = document.querySelector("#btn_left");
    const btn_right = document.querySelector("#btn_right");
    let img_count = btn_images.length;

    for(let i = 0; i < btn_images.length; ++i)
    {
        btn_images[i].addEventListener('click', () => {
            //target_img.src = `../img/${btn.alt}.png`;
            //target_img.alt = btn.alt;
            target_img.setAttribute('src', btn_images[i].getAttribute('src'));
            target_img.setAttribute('alt', btn_images[i].getAttribute('alt'));
            SetImage(i);
        });
    }

    function SetImage(index){
        //target_img.src = `../img/${btn_images[index].alt}.png`;
        //target_img.alt = btn_images[index].alt;
        target_img.setAttribute('src', btn_images[index].getAttribute('src'));
        target_img.setAttribute('alt', btn_images[index].getAttribute('alt'));
        btn_left.disabled = false;
        btn_right.disabled = false;
        if(index == 0)
        {
            btn_left.disabled = true;
        }
        if(index == btn_images.length - 1)
            btn_right.disabled = true;
    }

    btn_left.addEventListener('click', (e) => {
        e.preventDefault();
        let index = -1;
        for(let i = 0; i < btn_images.length; ++i)
        {
            //if(target_img.alt == btn_images[i].alt)
            if(target_img.getAttribute('alt') == btn_images[i].getAttribute('alt'))
            {
                index = i;
                break;
            }
        }
        if(index == -1)
            index = 3;
        else
            --index;
        SetImage(index);
    });

    btn_right.addEventListener('click', (e) => {
        e.preventDefault();
        let index = -1;
        for(let i = 0; i < btn_images.length; ++i)
        {
            //if(target_img.alt == btn_images[i].alt)
            if(target_img.getAttribute('alt') == btn_images[i].getAttribute('alt'))
            {
                index = i;
                break;
            }
        }
        if(index == -1)
            index = 0;
        else
            ++index;
        SetImage(index);
    });
});
