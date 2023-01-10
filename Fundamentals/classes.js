class animal {
    constructor(breed, sound, food) {
        this.breed = breed;
        this.sound = sound;
        this.food = food;
    }

    bark() {
        console.log(this.sound);
    }
}

let ani = new animal("Alpaca", "Shmmm", "Oranges");
console.log(ani);
ani.bark();


class pet extends animal {
    constructor(breed, sound, food, name) {
        super(breed, sound, food);
        this.name = name;
    }
    groom() {
        console.log(this.sound + " " + this.sound);
    }
}

let puppie = new pet("Dog", "Wow", "beef", "Gandolfo");
console.log(puppie);
puppie.bark();
puppie.groom();
