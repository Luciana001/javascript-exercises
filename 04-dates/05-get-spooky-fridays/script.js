/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var mois = new Array("Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre");
   
    var rep = "";
    // your code here
    document.getElementById("run").addEventListener("click", function In() {
        
        var year = document.getElementById("year").value;
        console.log(year);
        var date = new Date(+document.getElementById("year").value, 0);
        console.log(date);

        for (var i=0; i<12; i++){
            date.setMonth(i,13);
            if (date.getDay() == 5){
                rep = rep +" - "+ mois[i];
            }
           
        }
        console.log(rep);
        document.getElementById("target").innerHTML = ("Les mois de l'année "+year+" comprenant un vendredi 13, sont: "+rep);
       
    });

})();
