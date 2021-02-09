// 08-dom/06-mini-carousel/script.js - 8.6: mini carousel


(() => {

    let gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    // your code here
 
 
let imgCarousel = document.querySelector('.imgCarousel')
 
let i = 0;

function carGal()
{
    if (i >= gallery.length-1) i = -1;
    i++;
    return setImg();
}

function setImg()

{
    return slider.setAttribute("src","img/" +gallery[i]);
}

})();