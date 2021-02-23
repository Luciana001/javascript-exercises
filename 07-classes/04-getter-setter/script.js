/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", function In() {
    
        class person {
            
            constructor(firstname, lastname){
                this.firstname = firstname;
                this.lastname = lastname;
            }
            get fullName(){
                return this.firstname+" "+this.lastname;
            }
            set fullName(value){
                return [this.firstname, this.lastname] = value.split(" ");
                
            }

        }
        let julie= new person("Julie","Gérard");
        console.log(julie.fullName);

        person.fullName = new person("Evelyne","Pacchioni");
        //console.log(person.fullName);
        console.log(person.fullName.firstname);
        console.log(person.fullName.lastname);

        person.fullName = new person("Nolan","Pinto");
        //console.log(person.fullName);
        console.log(person.fullName.firstname);
        console.log(person.fullName.lastname);
    });
    // your code here
})();
