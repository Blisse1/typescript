"use strict";
// We cannot do that with an interface.
// Literal types
let myName;
let userName;
// functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg("hello");
logMsg(add(4, 5));
const subtract = function (c, d) {
    return c - d;
};
//
// interface mathFunction {
//     (a: number, b:number):  number;
// } 
//
let multiply = function (c, d) {
    return c * d;
};
let divide = function (b, c) {
    return b / c;
};
logMsg(multiply(2, 2));
// types aliases are preferred with functions
// interfaces for classes and extend those
//
//
// optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
// required parameters need to come first
// and the last for the optional parameter
// default value
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(7, 2, 1)); // 10
logMsg(addAll(7, 2)); // 9
logMsg(sumAll(7, 2)); // 11
logMsg(sumAll(undefined, 2)); // to skip a
