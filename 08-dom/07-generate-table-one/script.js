/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function generate_table() {

    var body = document.getElementsByTagName("body")[0];

    let tab = document.createElement("table")
    let tblBody = document.createElement("tbody");



    var col = document.createElement("tr")
    for (var j = 0; j <= 9; j++) {
        var cell = document.createElement("td")
        var cellTxt = document.createTextNode("cell in row " + (j + 1) + " column 1")
        cell.appendChild(cellTxt)
        col.appendChild(cell)
    }



    tblBody.appendChild(col)
    tab.appendChild(tblBody)
    body.appendChild(tab)
    tab.setAttribute("border","2")
    document.getElementById("target").innerHTML = tab.cell
    console.log(tab)

})();
