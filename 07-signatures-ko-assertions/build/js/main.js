"use strict";
// Index signatures
// Useful when you're creating an object
// but you don't know the exact names of the object keys
// but you do know the shape of the object and you can 
// declare the type of the keys and the types of the values
//
// TS requires index signatures if you attempt to access
// an object property dinamically
//
//
// This is in case we don't know the properties
// interface TransactionObj {
//     readonly [index: string]: number 
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);
// Dinamically accesing data
let prop = "Pizza";
console.log(todaysTransactions[prop]);
// with a loop
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
const student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
};
// for (const key in student) {
//    console.log(`${key}: ${student[key]}`) 
// }
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
// accessing properties without a index signature using
// assertions
// If we don't know the interface of student
Object.keys(student).map(key => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, "name");
// Record utility type
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250,
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
