"use strict";
class Coder {
    constructor(name, music, age, // can only be accessed from this class
    lang = "TypeScript" // instances can modify it
    ) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello! I'm ${this.age}`;
    }
}
const bliss = new Coder("bliss", "jazz", 15);
console.log(bliss.getAge());
// console.log(bliss.age); // property is private
// console.log(bliss.lang); // property is private
//
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age); // this have to come first 
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write this in ${this.lang}`;
    }
}
const Sara = new WebDev("linux", "Sara", "hip-hop", 35);
console.log(Sara);
console.log(Sara.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Jimmy = new Guitarist("Jimmy", "guitar");
console.log(Jimmy.play('strums'));
//////////////////////////////////////////////////////////////////////////////
class Peeps {
    // to any specific object that you instantiate with the class
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0; // it applies directly to the class and not
const John = new Peeps("John");
const Steve = new Peeps("Steve");
console.log(Steve.id);
console.log(Peeps.count);
//////////////////////////////////////////////////////////////////////////////
//
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error("Param is not an array of strings");
    }
}
const myBands = new Bands();
myBands.data = ["Neil Young", "The Beatles"]; // setter
myBands.data = [...myBands.data, "ZZ Top"]; // setter
// myBands.data = ["Van Halen", 5150]; // setter
