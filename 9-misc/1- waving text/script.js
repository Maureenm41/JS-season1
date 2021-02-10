// 09-misc/01-waving-text/script.js - 9.1: waving text


(() => {

    // your code here

})();

const text = document.querySelector(".material");
const strtext = text.textContent ;
const splitText = strtext.split("") ;

text.textContent="";

for (let i=0; i < splitText.length; i++ )
{
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50) ;

function onTick()
{
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
}
if (char===splitText.length)
{
    complete();
    //return;
}


function complete()
{
    clearInterval(timer);
    timer = null;
}