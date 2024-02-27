// Type alias
type stringOrNumber = string | number;
type stringOrNumberArr = string | number[];

type Guitarist = {
    name?: string,
    active: boolean, // making active optional, it became union type
    // active?: boolean | undefined
    albums: (string | number)[],
}

type UserId = stringOrNumber;

// We cannot do that with an interface.

// Literal types

let myName: "bliss";

let userName: "bliss" | "bob"| "foo";

// functions

const add = (a: number, b: number): number => { // return type number explicitly
    return a + b;
}

const logMsg = (message: any) => { // return type void because doesnt return anything
    console.log(message);
}

logMsg("hello");
logMsg(add(4,5));

const subtract = function(c: number, d: number): number{
   return c - d; 
}

type mathFunction = (a: number, b:number) => number;
//
// interface mathFunction {
//     (a: number, b:number):  number;
// } 
//
let multiply:  mathFunction = function(c, d){
    return c * d;
}

let divide: mathFunction = function(b, c){
    return b / c;
}

logMsg(multiply(2, 2));

// types aliases are preferred with functions
// interfaces for classes and extend those
//
//
// optional parameters

const addAll = (a: number, b: number, c?: number): number => {
    if(typeof c !== "undefined"){
        return a + b + c;
    }
    return a + b;
}
// required parameters need to come first
// and the last for the optional parameter

// default value
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
    return a + b + c;
}

logMsg(addAll(7, 2, 1)) // 10
logMsg(addAll(7, 2)) // 9
logMsg(sumAll(7, 2)) // 11
logMsg(sumAll(undefined, 2)) // to skip a
