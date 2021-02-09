/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    

   

    document.getElementById("run").addEventListener("click", function In() {
        var day = document.getElementById("dob-day").value;
        //console.log(day);
        var month = document.getElementById("dob-month").value;
        //console.log(month);
        var year = document.getElementById("dob-year").value;
        //console.log(year);
    
    
        var naiss = new Date(year, (month - 1) ,day);
        //console.log(naiss);
    
        //console.log(naiss);

        var diff = Date.now() - naiss.getTime();
        //console.log(diff);
        var age = new Date (diff);
        //console.log(age);


        
        
        alert("Vous avez "+(Math.abs(age.getUTCFullYear() - 1970))+" ans!");
       
    });
    
})();
