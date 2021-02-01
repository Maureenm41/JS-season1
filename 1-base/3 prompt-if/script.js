// 01-base/03-prompt-if/script.js - 1.3: promp & if

(() => {
  // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
  console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
  console.log('Hello Woods programmer');

  // YOUR CODE HERE
})();

//ex3

if (confirm('Do you want some cake')) {
  
  console.log('Congratulation ! Here ! Have some cake !');
  document.getElementById("deliciouscake")
} else {
  
  console.log('More cake for me then :p !');
  document.getElementById("deliciouscake")
}