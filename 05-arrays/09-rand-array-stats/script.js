/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here
    document.getElementById("run").addEventListener("click", function In() {
        var tab = new Array();
        var sum = 0;
        var big;
        var small;
        var moyenne;


        //remplir aléatoirement le tab
        for (var i = 0; i < 10; i++) {
            tab[i] = Math.floor(Math.random() * 101);
            document.getElementById("n-" + (i + 1)).innerHTML = (tab[i]); //affichage dans le html
            sum = sum + tab[i]; //somme
            big = Math.max(tab);
        }
        moyenne = sum / i;
        big = tab.reduce(function (a, b) {
            return Math.max(a, b);
        })
        small = tab.reduce(function (a, b) {
            return Math.min(a, b);
        })
        document.getElementById("sum").innerHTML = (sum);
        document.getElementById("average").innerHTML = (moyenne);
        document.getElementById("max").innerHTML = (big);
        document.getElementById("min").innerHTML = (small);



    });

})();
