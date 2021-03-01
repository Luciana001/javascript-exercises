/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
const inputs = Array.from(document.querySelectorAll("input"));
(() => {
    // your code here
    

    document.getElementById("run").addEventListener("click", async() => {

        const values = inputs.map(({value}) => value.trim()) //trim enleve les espaces inutiles

        if (values.some(value =>value === "")){
            console.error("erreur")
            return
        }

        const [name, alterEgo, powers] = values
        const response = await fetch(" http://localhost:3000/heroes", {
            method: "POST",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify({
                name, 
                alterEgo, 
                abilities: powers.split(", ").map((str) => str.trim())
            }),
        })
        const freshHero = await response.json()
        console.log(freshHero)
    });
})();
