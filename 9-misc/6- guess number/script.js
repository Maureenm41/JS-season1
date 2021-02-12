  
// 09-misc/06-guess-number/script.js - 9.6: guess the number

(() => {

    // your code here

})();

let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');

let number = [Math.floor(Math.random()*100)]

btn.addEventListener('click', function()
{
    let input = document.getElementById('userInput').value;
    if(input == number)
    {
        output.innerHTML = `that's it! The number was ${number}`;
    }
    else if (input < number)
    {
        output.innerHTML = "higher";
    };
    if (input > number)
    {
        output.innerHTML ="lower";
    }
})