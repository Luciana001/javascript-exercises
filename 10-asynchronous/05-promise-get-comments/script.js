
/* becode/javascript

/* becode/javascript*
 * /10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {

        /*window.lib.getPosts().then(function getPosts(array) {
            array.forEach(function testComments (element){
                window.lib.getComments().then(element.id,(error,comments) =>{
                    console.log(comments);
                })
               

            });
            
             console.log(array)
            
        })
        */
       window.lib.getPosts().then((posts) => { // promise.all attend que toutes les promesses soient resolues pour passer à la ssuite
        Promise.all(
            posts.map(post => window.lib.getComments(post.id)) // map va copier un tableau ds un autre tableau
        ).then((postComments) =>{
            postComments.forEach((comments, i) => {
                posts[i].comments = comments
            })
            console.log(posts)
        })
    })
    });
})();
