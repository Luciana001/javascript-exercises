/* becode/javascript
 *
 * /05-arrays/08-array-includes/script.js - 5.8: présence dans un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    document.getElementById("run").addEventListener("click", function In() {
        const fruits = [
            "apple",
            "perry",
            "strawberry",
            "tomato",
            "kiwi",
            "banana",
            "orange",
            "mandarin",
            "durian",
            "peach",
            "grapes",
            "cherry",
        ];

        //checkArray:
        /*fruits.forEach((element) =>{
            if (element === "apple"){
                console.log("Oui");
                break;
            } else console.log("Non")
        })*/
        for(var i=0; i<fruits.length; i++){
            if(fruits[i] === "apple"){
                
                console.log("Oui");
                break;
            } else console.log("Non");
            
        }
    });

    // your code here

})();
