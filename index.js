class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
        this.animalSize = ''
    }

    speak() {
        console.log(`The ${this.name} says ${this.sound}`);
    }

    set size(value) {
        this.animalSize = value;
    };

    get size() {
        return this.animalSize;
    }
}

class Cat extends Animal {
    constructor() {
        super();
        this.name = 'Cat';
        this.whiskers = 12;
        this.size = 'Small';
        this.sound = 'Meow';
    }
}

class Dog extends Animal {
    constructor() {
        super('Dog', 'Woof')
    }

    eat() {
        console.log(`The ${name} loves to eat! Yum!`)
    }

    sleep() {
        console.log(`The ${name} is sleeping ZZZZzzzz....`)
    }
}

const myCat = new Cat();
const myDog = new Dog();
myDog.speak();
myCat.speak();
