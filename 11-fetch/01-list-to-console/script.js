/* becode/javascript
 *
 * /09-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
   
    document.getElementById("run").addEventListener("click",async () => {
        const response = await fetch(" http://localhost:3000/heroes")
        const heroes = await response.json() //transforme le format de l'url en format json pour pouvoir le lire
            /*.then(response => response.json())
            .then(data => console.log(data))*/
            console.log(heroes)
    });


})();
