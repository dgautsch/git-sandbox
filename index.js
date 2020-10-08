import asciiCats from 'ascii-cats';
class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
        this.animalSize = '';
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
        this.size = 'small';
        this.whiskers = 18;
        this.zoomies = 2;
        this.bellyPats = 'All the pats';
    }

    get catName() {
        return this.name;
    }

    showCat() {
        console.log(asciiCats())
    }

    jump() {
        console.log(`Because the cat is ${this.size} it takes a tiny jump!`)
    }
}

const myCat = new Cat('meow meow meow');
myCat.speak();
console.log(myCat.catName);
myCat.showCat();
myCat.jump();
