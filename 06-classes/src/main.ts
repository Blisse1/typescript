class Coder {
    constructor(
        public readonly name: string, 
        public music: string, 
        private age: number,  // can only be accessed from this class
        protected lang: string = "TypeScript" // instances can modify it
    ){
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }

    public getAge(){
        return `Hello! I'm ${this.age}`;
    }
}

const bliss = new Coder("bliss", "jazz", 15);
console.log(bliss.getAge());
// console.log(bliss.age); // property is private
// console.log(bliss.lang); // property is private
//
class WebDev extends Coder{
    constructor( 
        public computer: string,
        name: string,
        music: string,
        age: number,
    ){
        super(name, music, age); // this have to come first 
        this.computer = computer;
    }
    public getLang(){
        return `I write this in ${this.lang}`;
    }
}

const Sara = new WebDev("linux", "Sara", "hip-hop", 35)
console.log(Sara);
console.log(Sara.getLang());
// console.log(Sara.age);
// console.log(Sara.lang);
//
// /// 
//
interface Musician {
    name: string,
    instrument: string,
    play(action: string): string
}

class Guitarist implements Musician {
   name: string
   instrument: string

   constructor(name: string, instrument: string){
       this.name = name
       this.instrument = instrument
   }
   play(action: string){
       return `${this.name} ${action} the ${this.instrument}`;
   }
}

const Jimmy = new Guitarist("Jimmy", "guitar");
console.log(Jimmy.play('strums'));

//////////////////////////////////////////////////////////////////////////////

class Peeps {
    static count: number = 0; // it applies directly to the class and not
    // to any specific object that you instantiate with the class

    static getCount(): number{
       return Peeps.count; 
    }

    public id: number

    constructor(public name: string){
       this.name = name;
       this.id = ++Peeps.count;
    }
}

const John = new Peeps("John");
const Steve = new Peeps("Steve");


console.log(Steve.id)
console.log(Peeps.count)
//////////////////////////////////////////////////////////////////////////////
//
class Bands {
    private dataState: string[]

    constructor(){
        this.dataState = [];
    }

    public get data(): string[] { // only using get, makes it readonly bc it doesnt have setter
       return this.dataState; 
    }
    public set data(value: string[]) {
        if(Array.isArray(value) && value.every(el => typeof el === 'string')){
            this.dataState = value;
            return
        }else throw new Error("Param is not an array of strings")
    }
}

const myBands = new Bands();
myBands.data = ["Neil Young", "The Beatles"]; // setter
myBands.data = [...myBands.data, "ZZ Top"]; // setter
// myBands.data = ["Van Halen", 5150]; // setter
