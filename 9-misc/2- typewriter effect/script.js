// 09-misc/02-typewriter-effect/script.js - 9.2: typewriter effect


(() => {

    // your code here

})();


const typeWriter = function(txtElement, words ,wait = 1000)
{
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0 ;
    this.wait = parseInt( wait, 10);
    this.type();
}