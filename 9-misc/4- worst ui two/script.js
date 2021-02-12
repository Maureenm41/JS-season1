// 09-misc/04-worst-ui-two/script.js - 9.4: worst user interface (2) : phone clicker


(() => {

    // your code here

})();

let btnAdd = document.querySelector('#target')
let target = document.querySelector('section')

btnAdd.addEventListener('click',()=>
{
    target.value = parseInt(target.value)+1;
})