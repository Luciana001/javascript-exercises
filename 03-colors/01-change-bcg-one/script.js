/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function Color() {
    document.getElementById("green").addEventListener("click", function Vert() {
        document.body.style.background = "#096A09";
    });
    document.getElementById("red").addEventListener("click", function Red() {
        document.body.style.background = "#ff0000";
    }); 
    document.getElementById("yellow").addEventListener("click", function Yellow() {
        document.body.style.background = "#ccff33";

    });
    document.getElementById("blue").addEventListener("click", function Blue() {
        document.body.style.background = "#000066";
    });
    

    // your code here

})();
