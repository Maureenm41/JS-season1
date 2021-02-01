// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Woods programmer');

    // YOUR CODE HERE
})();

//ex4

var username = prompt("What is your name?");
var gender = prompt("Whats is you gender");
var city = prompt("What city do you lives ?");

var answer = username + gender + city;
var answer =confirm("Are you sure ?");

function moreAboutMe(){
if(answer== true)
{
    console.log(answer);
    document.getElementById("aboutme")
}
else
{
txt="please enter valid data";

}
document.getElementById("aboutme").innerHTML = txt;

}