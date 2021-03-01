/* becode/javascript
 *
 * /10-asynchronous/07-async-get-posts/script.js - 10.7: chargement d'articles (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    
    console.log("2")

    document.getElementById("run").addEventListener("click", () => {
        async function post() { // async = prommesse
            const x = await window.lib.getPosts() // await = attend le retour de la promesse pour faire cet execution
            console.log(x)
            
        }
        post()
        

    });
})();
