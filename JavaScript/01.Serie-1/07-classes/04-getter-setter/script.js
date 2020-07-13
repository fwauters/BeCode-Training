// 07-classes/04-getter-setter/script.js - 7.4: getter & setter


(() => {
    // your code here
    class Person {       
        set name(value) {
            let split = value.split(" ");
            this.firstName = split[0];
            this.lastName = split[1];
        }
        get name() {
            return `${this.firstName} ${this.lastName}`;
        }
    }

    document.getElementById("run").addEventListener("click", () => {
        let person = new Person;
        person.name = "Raoul Duke";
        console.log(person.name);
        console.log(person);
    });
})();
