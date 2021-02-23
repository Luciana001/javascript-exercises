/* becode/javascript
 *
 * /06-dom/03-select-three/script.js - 6.3: sélection multiple par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    
    /* const container = document.querySelector(".content ");
    console.log(container)
    const mots = container.querySelectorAll("section.material > p")
    console.log(mots);*/
    const container = document.querySelector(".material")
    
    const mots = container.querySelectorAll("p.target")
    //console.log(mots)
    const newMot = "Owned"
    
    mots.forEach (( mot) => {
        mot.replaceWith(newMot);
    });
    //console.log(mots)

    


})();
