"use strict";
let stringArr = ["one", "two", "three"]; // stringArr: string[]
let guitars = ["Strat", "Les Paul", 51]; // guitars: (string | number)[]
let mixedData = ["Strat", 51, true]; // mixedData: (string | boolean | number)[]
let test = []; // any
let band = [];
band.push('bliss');
/* Tuple
/* More strict, define something that is locked in
/* to a type in a specific element position and a specific
/* length of an array
*/
let myTuple = ["bliss", 12, true];
// specific position and fixed length
let mixed = ["asd", 12, false]; // Union type 
// it's not required to have only 3 elements
// Objects
let myObj;
myObj = [];
console.log(typeof myObj);
const exampleObj = {
    prop1: "Dave",
    prop2: true,
};
// type Guitarist = {
//     name: string,
//     active?: boolean, // making active optional, it became union type
//     // active?: boolean | undefined
//     albums: (string | number)[],
// }
let evh = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, "OU812"],
};
let jp = {
    // name: "Jimmy",
    active: true,
    albums: ["I", "II", "IV"],
};
evh = jp;
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}`;
    }
    return `Hello!`;
};
// this to avoid writing properties
//
console.log(greetGuitarist(jp));
// Enums
//
var Grades;
(function (Grades) {
    Grades[Grades["U"] = 1] = "U";
    Grades[Grades["D"] = 2] = "D";
    Grades[Grades["C"] = 3] = "C";
    Grades[Grades["B"] = 4] = "B";
    Grades[Grades["A"] = 5] = "A";
})(Grades || (Grades = {}));
console.log(Grades.D);
