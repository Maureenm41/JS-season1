// 09-misc/02-typewriter-effect/script.js - 9.2: typewriter effect


(() => {

    // your code here

})();


var i = 0;
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("target").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}