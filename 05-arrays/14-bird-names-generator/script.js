/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", function In() {
        const birds = [
            { name: "mouette", fem: true },
            { name: "corbeau" },
            { name: "mésange", fem: true },
            { name: "hibou" },
            { name: "buse", fem: true },
            { name: "pigeon" },
            { name: "pie", fem: true },
            { name: "vautour" },
            { name: "faucon" },
            { name: "rouge-gorge" },
            { name: "tourterelle", fem: true },
            { name: "corneille", fem: true },
        ];
        const adjectives = new Set([
            "cendré",
            "huppé",
            "chantant",
            "hurlant",
            "perché",
            "grand",
            "petit",
            "bleu",
            "pantelant",
            "tangent",
            "arboré",
        ]);
        var oiseau = new Array();
        var adjTab = Array.from(adjectives);// copier tableau adjectifs ds 1 vrai tableau
        var index = Math.floor(Math.random() * birds.length);//index de l'oiseau tiré aleat
        var indexAdj = Math.floor(Math.random() * adjTab.length);//index de l adj choisit aleat

        oiseau = [birds[index], adjTab[indexAdj]];// stocker l oiseau,son index et l'adj ds le new tableau

        if (oiseau[0].fem === true) {
            document.getElementById("target").innerHTML = (oiseau[0].name + " " + oiseau[1] + "e");
        } else document.getElementById("target").innerHTML = (oiseau[0].name + " " + oiseau[1]);



    });
})();
