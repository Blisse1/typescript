let stringArr: string[] = ["one", "two", "three"]; // stringArr: string[]
let guitars = ["Strat", "Les Paul", 51]; // guitars: (string | number)[]
let mixedData = ["Strat", 51, true]; // mixedData: (string | boolean | number)[]

let test = []; // any
let band: string[] = [];
band.push('bliss');

/* Tuple
/* More strict, define something that is locked in
/* to a type in a specific element position and a specific
/* length of an array
*/

let myTuple: [string, number, boolean] = ["bliss", 12, true];
// specific position and fixed length

let mixed = ["asd", 12, false]; // Union type 
// it's not required to have only 3 elements

// Objects

let myObj: object;

myObj = [];

console.log(typeof myObj);

const exampleObj = {
    prop1: "Dave",
    prop2: true,
}

// exampleObj.prop1 =  41
//
// Objects with types

interface Guitarist {
    name?: string,
    active: boolean, // making active optional, it became union type
    // active?: boolean | undefined
    albums: (string | number)[],
}

// type Guitarist = {
//     name: string,
//     active?: boolean, // making active optional, it became union type
//     // active?: boolean | undefined
//     albums: (string | number)[],
// }

let evh: Guitarist = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, "OU812"],
}

let jp: Guitarist = {
    // name: "Jimmy",
    active: true,
    albums: ["I", "II", "IV"],
}

evh = jp;

const greetGuitarist = (guitarist: Guitarist) => {
    if(guitarist.name){
        return `Hello ${guitarist.name.toUpperCase()}` 
    }
    return `Hello!`
}

// this to avoid writing properties
//
console.log(greetGuitarist(jp));

// Enums
//
enum Grades {
    U = 1,
    D,
    C,
    B,
    A
}

console.log(Grades.D);
