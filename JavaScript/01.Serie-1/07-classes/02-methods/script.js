//07-classes/02-methods/script.js - 7.2: methods


(() => {
    // your code here
    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }
        sayHello() {
            let h = ("Hello, " + this.firstname + " " + this.lastname + " !");
            return h;
        }
    }
    document.getElementById("run").addEventListener("click", () => {
        let instance = new Person("Raoul", "Duke");
        console.log(instance);
        console.log(instance.sayHello());
    });
})();
