/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // get attribut
    let att= source.getAttribute("data-image")
    console.log(att)

    // create new attribut
    target.setAttribute("data-js","https://www.google.com/search?q=javascript&sxsrf=ALeKk00GN2OE5BSlcqTD5lPB-9LHQify2w:1613983331977&source=lnms&tbm=isch&sa=X&ved=2ahUKEwieubO5jP3uAhWODOwKHcsuAQYQ_AUoAXoECBkQAw&biw=958&bih=923#imgrc=-rrPCWEn9h6jiM")
    let newAtt =target.getAttribute("data-js")
    console.log(newAtt)

    //delete un attribut
    att= source.removeAttribute("data-image")
    console.log(att)

    


})();
