// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    // your code here
    class Cat extends Animal {
        greeting = super.sayHello();
    }
    class Dog extends Animal {
        greeting = super.sayHello();
    }

    document.getElementById("run").addEventListener("click", () => {

        let cat = new Cat();
        cat.name = "Kitty";
        cat.constructor.greeting = "Miaouw";
        console.log(cat.sayHello());

        let dog = new Dog();
        dog.name = "Medor";
        dog.constructor.greeting = "Whoof";
        console.log(dog.sayHello());

    });
})();
