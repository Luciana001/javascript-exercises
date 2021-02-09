/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function saisir() {
    
    // to get the value of an input: document.getElementById("element-id").value
    

    document.getElementById("run").addEventListener("click", function factorielle(){

        var n = document.getElementById("number").value
        //alert(n);
        var f=1;

        // your code here
       
            if (n < 0){
                alert("Veuillez entrer un entier positif ou null");
                return alert("Erreur");
            }
            else{
                if (n == 0){
                    return alert("1");
                }
                else {
                    for( var i = 1; i<=n; i++){
                        f = f * i;
                    }
                    return alert("La factorielle de "+n+" est: "+f);
                }
            }
        
    });

})();
