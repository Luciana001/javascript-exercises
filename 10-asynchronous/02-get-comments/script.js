/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
   
   

    document.getElementById("run").addEventListener("click", () => {

        window.lib.getPosts(function post(error,array) {
            let count = 0
            array.forEach(function target_comments (element){ //pour chaque element du tableau on va ajouter le commentaire correspondant a l id
                window.lib.getComments(element.id,(error,comments) =>{
                    element.comments = comments;

                    if ( ++count === array.length){ // affichera le tableau une fois qu il sera complet
                        console.log(array)
                    }
                })
                
            });
           
            
        })
    });
})();
