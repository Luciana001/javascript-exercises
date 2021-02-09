/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function boxAlert() {
    
    var conf = false;

    while (conf == false) {
        var age = prompt("Veuillez entrer votre âge");
        var genre = prompt("Etes-vous une femme ou un homme?");
        var ville = prompt("Dans quelle ville vivez-vous?");
        conf = confirm("Vous avez " + age + " ans, vous êtes " + genre + " et vous vivez à " + ville + ".");
        

    } 
    

})();
