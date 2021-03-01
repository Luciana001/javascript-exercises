/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

//const { bodyParser } = require("json-server");

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const temp = document.querySelector("#tpl-hero")
    const target = document.querySelector("#target")

    document.getElementById("run").addEventListener("click", async() => {

        
            const url = await fetch(" http://localhost:3000/heroes")
            const data = await url.json()

            data.forEach(({ name, alterEgo, abilities }) => {
                const clone = temp.cloneNode(true).content;

                clone.querySelector(".name").textContent = name
                clone.querySelector(".alter-ego").textContent = alterEgo
                clone.querySelector(".powers").textContent = abilities.join(", ")

                target.appendChild(clone)
            });
        

       
    });


}) ();
