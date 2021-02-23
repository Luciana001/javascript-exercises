/* becode/javascript
 *
 * /06-objects/04-from-entries/script.js - 6.4: fromEntries
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", function In() {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    const tab = new Array();

    for (var i=0 ; i<keys.length; i++){
        tab[i]= [keys[i],values[i]];
    }
    //console.log(tab);
    const newObj = Object.fromEntries(tab);
    console.log(newObj);
    // your code here
    });
})();
