"use strict";
// convert to more or less specific
//
let a = "bliss";
let b = a; // less specific
let c = a; // more specific
let d = "world";
let e = "peace"; // react doesnt support angle brackets
// function union type
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(2, 2, "concat"); // aquí se le dice explícitamente
// que lo que va a retornar es string
// Be careful! TS sees no problem but a string is returned
let nextVal = addOrConcat(2, 2, "concat");
// The DOM
//
const img = document.getElementById("img");
const myImg = document.getElementById("img");
