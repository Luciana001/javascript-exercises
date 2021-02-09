/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function operat() {
    // to get the value of an input: document.getElementById("element-id").value
   

    document.getElementById("addition").addEventListener("click", function somme() {
        // perform an addition
        var nb1 = Number(document.getElementById("op-one").value);
        var nb2 = Number(document.getElementById("op-two").value);
        var somme = (nb1 + nb2);
        alert(nb1+ " + " +nb2+ " = " +somme);
    });

    document.getElementById("substraction").addEventListener("click", function sous() {
        // perform an substraction
        var nb1 = Number(document.getElementById("op-one").value);
        var nb2 = Number(document.getElementById("op-two").value);
        var sous = (nb1 - nb2);
        alert(nb1 + "-" + nb2 + "=" +sous);
    });

    document.getElementById("multiplication").addEventListener("click", function mul() {
        // perform an multiplication
        var nb1 = Number(document.getElementById("op-one").value);
        var nb2 = Number(document.getElementById("op-two").value);
        var mul = (nb1 * nb2);
        alert(nb1 + "x" +nb2+ "=" +mul);
    });

    document.getElementById("division").addEventListener("click", function div() {
        // perform an division
        var nb1 = Number(document.getElementById("op-one").value);
        var nb2 = Number(document.getElementById("op-two").value);
        var div = (nb1 / nb2);
        alert(nb1 + "/" +nb2+ "=" +div);
    });
})();
