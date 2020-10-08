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
    constructor(sound) {
        super('Cat', sound);
        this.size = 'Small';
    }
}

const myCat = new Cat('meow meow meow');
myCat.speak();
