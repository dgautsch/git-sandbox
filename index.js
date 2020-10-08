class Animal {
    construrctor(name, sound) {
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
        this.size = 'Small';
        this.sound = 'Meow';
    }
}

const myCat = new Cat();
myCat.speak();
