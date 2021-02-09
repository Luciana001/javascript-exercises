/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
var buton=document.getElementById("run");
var allchar="0123456789ABCDEF";

run.addEventListener("click",myFun);

function myFun(){
  var  randcol= "";
for(var i=0; i<6; i++){
   randcol += allchar[Math.floor(Math.random()*16)];
}
console.log(randcol);
document.body.style.backgroundColor= "#"+randcol;
}

