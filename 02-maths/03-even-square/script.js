/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function calcul() {

    document.getElementById("run").addEventListener("click", function square() {

        // your code here
        var nb, i;
        var tab=[];
        
        for (i=1; i<=21; i++) {
            nb = (i * i);
            tab[(i-1)]= nb ;
            
          

        }
        //alert(tab[(i-1)]);
        
        for (i=0; i<tab.length; i++){
            //alert(tab[i] + ",");
            //console.log(tab[i]);
            //document.write(tab.join(" ,"));
            alert(tab.join(" ,"));
        }
       
       
       

    });

})();
