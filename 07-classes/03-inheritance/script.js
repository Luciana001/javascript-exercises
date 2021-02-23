/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", function In() {

        class Animal {
            name;

            constructor(name) {
                this.name = name;

            }
            sayHello() {
                console.log(this.name + " " + this.constructor.parle)
            }
        }
        class cat extends Animal {
            constructor(name) {
                super(name);
            }

            static parle = "Miaule"
        }
        class dog extends Animal {
            constructor(name) {
                super(name);
            }
            static parle = "Aboie"
        }



        let cat1 = new cat("Luna");
        let dog1 = new dog("Zora");
        dog1.sayHello();
        cat1.sayHello();





    });
    // your code here
})();
