
// 02-maths/03-even-square/script.js - 2.3: squares and pairs


(() => {

    document.getElementById("run").addEventListener("click", () => {

        // your code here

    });

})();
//ex3

function square()
{
var n=prompt ("Enter the limit 'n' to generate the table of numbers from 1 to n:","");
var msg="";
var res= "0";
 
for(var x= 1; x<=n;x++)
{
res = x * x;
msg = msg + " " + x + " * "+ x + " = " + res + "\n";
}
 
alert(msg);
} 