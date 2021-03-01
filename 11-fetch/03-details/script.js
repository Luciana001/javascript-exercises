/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {

        var saisie = document.getElementById("hero-id").value
        console.log(saisie)
        var section = document.querySelector(".material")
        var ol = document.querySelector("#target")

        var url = " http://localhost:3000/heroes"
        const x = new XMLHttpRequest()
        x.open('GET', url)
        x.responseType = 'json'
        x.send()

        x.onload = function () {
            var heroes = x.response
            insertHtml(heroes)
            console.log(heroes)

        }

        function insertHtml(heroes) {
            var hero = heroes
            console.log(hero[saisie - 1])


            document.getElementsByClassName("name").value = hero[saisie - 1].name
            document.getElementsByClassName("alter-ego").value = hero[saisie - 1].alterEgo
            document.getElementsByClassName("powers").value = hero[saisie - 1].abilities

        }
        // debut de la version de leny (pas finie de copeir)
       /* const id = +InputDeviceInfo.value
        if(isNaN(id)||id ===0){
            console.error("Invalid Id")
            return
        }
        const url = await fetch(" http://localhost:3000/heroes")
            const data = await url.json()

            data.forEach(({ name, alterEgo, abilities }) => {
                const clone = temp.cloneNode(true).content;

                clone.querySelector(".name").textContent = name
                clone.querySelector(".alter-ego").textContent = alterEgo
                clone.querySelector(".powers").textContent = abilities.join(", ")

                target.appendChild(clone)
            });
            */
        











    });

})();
