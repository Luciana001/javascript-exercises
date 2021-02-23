/* becode/javascript
 *
 * /06-dom/02-select-two/script.js - 6.2: sélection par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    const mot = document.querySelector("#target")
    const newMot = "Owned"
    mot.replaceWith(newMot);

    /*
    // créer un nouvel élément relié à rien puis lui donner un id temporaire
    var mot= document.createElement("span")
    mot.id = "newSpan";

    // ecrire le nouveau contenu
    var mot_content = document.createTextNode("Owned");
    mot.appendChild(mot_content);

    //selectionner l'ID du doc HTML
    var motReplace = document.getElementById("target");
    var parent = motReplace.parentNode;

    //remplacé un par l autre
    parent.replaceChild(mot,motReplace);
    */

})();
