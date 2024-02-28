type One = string;
type Two = string | number;
type Three = "hello";

// convert to more or less specific
//
let a: One = "bliss";
let b = a as Two; // less specific
let c = a as Three; // more specific

let d = <One>"world";
let e = <string | number>"peace"; // react doesnt support angle brackets

// function union type
const addOrConcat = (a: number, b: number, c: "add" | "concat"): number | string => {
    if (c === "add") return a + b;
    return "" + a + b;
}

let myVal: string = addOrConcat(2, 2, "concat") as string; // aquí se le dice explícitamente
                                                        // que lo que va a retornar es string

// Be careful! TS sees no problem but a string is returned
let nextVal: number = addOrConcat(2, 2, "concat") as number;

// The DOM
//
const img = document.getElementById("img") as HTMLImageElement;
const myImg = <HTMLImageElement>document.getElementById("img");

