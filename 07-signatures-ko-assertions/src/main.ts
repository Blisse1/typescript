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

//     // Using readonly you cannot change properties
    
//     // all of the keys in this object are gonna be strings
//     // and all of the values are gonna be numbers
//     // and that is a index signature.
//     // It cannot be boolean
// }

// And we can put the index signature for keys we do know
interface TransactionObj {
    readonly [index: string]: number 
    Pizza: number, // Pizza, object key
    Books: number,
    Job: number,
}

const todaysTransactions: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50,
}

console.log(todaysTransactions.Pizza)
console.log(todaysTransactions["Pizza"]);

// Dinamically accesing data
let prop: string = "Pizza";
console.log(todaysTransactions[prop]);

// with a loop

const todaysNet = (transactions: TransactionObj): number => {
    let total = 0;
    for(const transaction in transactions){
       total += transactions[transaction] 
    }
    return total
}

console.log(todaysNet(todaysTransactions));

// todaysTransactions.Pizza = 40
//
interface Student {
    // [key: string]: string | number | number[] | undefined
    name: string,
    GPA: number,
    classes?: number[]
}

const student: Student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
}

// for (const key in student) {
//    console.log(`${key}: ${student[key]}`) 
// }

for (const key in student) {
   console.log(`${key}: ${student[key as keyof Student]}`) 
}
// accessing properties without a index signature using
// assertions

// If we don't know the interface of student
Object.keys(student).map(key => {
    console.log(student[key as keyof typeof student]);
})

const logStudentKey = (student: Student, key: keyof Student): void => {
    console.log(`Student ${key}: ${student[key]}`);
}

logStudentKey(student, "name");

////////////////////////////////////////////////

// interface Incomes {
//     [key: string]: number
// }

type Streams = 'salary' | 'bonus' | 'sidehustle';

type Incomes = Record<Streams, number | string>;
// Record utility type

const monthlyIncomes: Incomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250,
}

for (const revenue in monthlyIncomes){
    console.log(monthlyIncomes[revenue as keyof Incomes]);
}
