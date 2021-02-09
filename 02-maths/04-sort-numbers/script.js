/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function tableau() {

   
       
        
   

    document.getElementById("run").addEventListener("click", function tri() {

        // your code here
        var phrase  = document.getElementById("numbers").value;
        
        var tab = phrase.split(' ');
       // alert(tab);
       //alert(tab[2]);

       for (var i=0; i<tab.length; i++) {
        tab[i]=parseInt(tab[i]);
        
        }
        //alert(tab[2]);
        


        tab.sort(function(a,b){return a - b});
        alert(tab);
        
    

    });

})();
