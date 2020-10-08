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
