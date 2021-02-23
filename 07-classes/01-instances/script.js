/* becode/javascript
 *
 * /07-classes/01-instances/script.js - 7.1: instances
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", function In() {
        class Cat {
            constructor(name, age) {
                this.name = name;
                this.age = age;
            }
        }
        const inst1 = new Cat("Skitty", "9ans");
        console.log(inst1);
        const inst2 = new Cat("Pixel", "6ans");
        console.log(inst2);
        // your code here
    });
})();
