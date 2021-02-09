/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var dt = new Date();
    //console.log(dt);

    var hr = dt.getHours();
    //console.log(hr);

    if (( hr > 4) && (hr < 18 )){
        document.getElementById("target").innerHTML = "Hello";
    } else {
        if ((hr > 18) && ( hr < 4)){
            document.getElementById("target").innerHTML = "Good Evening";
        }

    }

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

})();
