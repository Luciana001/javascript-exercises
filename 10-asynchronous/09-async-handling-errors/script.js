/* becode/javascript
 *
 * /10-asynchronous/09-async-handling-errors/script.js - 10.9: gestion d'erreur (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        async function x (){        // je recuperes le tab de getPersons avec une fct async
            const tab =  window.lib.getPersons()
            return tab
        }
        
        

        const ab = async () =>{     //new fct async pour mon affichage et gestion des erreurs
            try {
                const affiche = await x() // try (essaie ) d'afficher ce que tu as recup ds la promise
                console.log(affiche)
            }
            catch (error) {         // si pas (en cas d erreur) affiche 
                console.error("Oups il y a un problème")
            }
        }
        ab()
           
    
        
        
    })
    
    /*const x = async () =>{  // ecrire une fct async qui va promettre de renvoyer "c est trop dur"
        return "c est trop dur"
    }
    console.log(x()) // afficher la promesse : 
                    // promise {fulfilled: c est trop dur}
    
    // afficher avec la methode promise (.then)
    x().then( v =>{        //  la valeur de la promesse de async :
        console.log(v)     // c est trop dur (ds la console)
    })                     // ancien et démodé
    */
   /*
    const newX = async (success = true ) => { // nouv fct async 
        if (success) return 16                //promise avec erreur (.catch)
        throw new Error ('Probleme')
    }

    //newX(false).catch(e => console.log(e))
    
     // Await pas tjs obligatoiore, son rôle est d'attendre que la promise soit 'resolved' 
    // pour continuer a executer le programme
    const getX = async () => {     // ancinenne fct async
        const lettres = await x() // le programe s'arrete à cette ligne, il attend que la promise 
        console.log(lettres)    // soit lue (ou échouée)  pour continuer 
    }
    getX()      // c est trop dur (ds la console)
    */
   /*
    const letX = async () => {  
        try{                                // try - catch (essaie et si pas )
            const lettres = await newX(true) // le programe s'arrete à cette ligne, attend le retour de la promesse
            console.log(lettres)            // affichage console   if true = 16 if false = probleme
        } catch (e) {
            console.log(e) 
        }           
    }
    letX() 
    */
   
})();
