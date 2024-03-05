// Utility Types

// Partial

interface Assignment {
    studentId: string, 
    title: string, 
    grade: number, 
    verified?: boolean, 
}

const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>)
: Assignment => {
    return{...assign, ...propsToUpdate}
}

const assignment1: Assignment = {
    studentId: "compsci123",
    title: "Final Proyect",
    grade: 0,
}

// console.log(updateAssignment(assignment1, {grade: 95}));
const assignGraded : Assignment = updateAssignment(assignment1, {grade: 95});

// Required and Readonly

const recordAssignment = (assign: Required<Assignment>): Assignment =>{
    return assign;
}

const assignVerified: Readonly<Assignment> = {
    ...assignGraded,
    verified: true
}

recordAssignment({...assignGraded, verified: true});

// Record

const hexColorMap: Record<string, string> = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
}

type Student = "Sara" | "Kelly"; // aquí el "|" significa ambos.
    type LetterGrades = "A" | "B" | "C" | "D" | "U";

const finalGrades: Record<Student, LetterGrades> = {
    Sara: "A",
    Kelly: "U",
}

interface Grades {
    assign1: number,
    assign2: number,
}

const gradeData: Record<Student, Grades> = {
    Sara: {assign1: 85, assign2: 91},
    Kelly: {assign1: 76, assign2: 15}
}

// Pick and Omit; Pick<>, Omit<>

type AssignResult = Pick<Assignment, "studentId" | "grade">; 
// de Assingment esta seleccionando ambas como keys

const score: AssignResult = {
    studentId: "k123",
    grade: 85,
}

type AssignPreview = Omit<Assignment, "grade" | "verified">;

const preview: AssignPreview = {
    studentId: "k123",
    title: "Final Proyect" ,
}

// Exclude and Extract, Exclude<> Extract<>

type adjustedGrade = Exclude<LetterGrades, "U">;
// This is gonna be a,b,c,d because we excluded U

type highGrades = Extract<LetterGrades, "A" | "B">
// And this is gonna be only A and B because we extracted them

// Nonnullable
type AllPossibleGrades = "Dave" | "John" | null | undefined;

type NamesOnly = NonNullable<AllPossibleGrades>; // this excludes null and undefined

// Return type
//
// type newAssign = {title: string, points: number};

const createNewAssign = (title: string, points: number) => {
    return { title, points };
}

type NewAssign = ReturnType<typeof createNewAssign>;
// now if we change create new assign its always going to update our ReturnType

const tsAssign: NewAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);

// Parameters
type AssignParams = Parameters<typeof createNewAssign>;

const assignArgs: AssignParams = ["Generics", 100];
const tsAssign2: NewAssign = createNewAssign(...assignArgs);
console.log(tsAssign2);

// Awaited - helps us with the ReturnType of a Promise

interface User {
    user: number,
    name: string,
    username: string,
    email: string,
}
const fetchUsers = async(): Promise<User[]> => {
    const data = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    ).then(res => {
            return res.json()   
        }).catch(err => {
            if(err instanceof Error) console.log(err.message)
        })
    return data
}

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;

fetchUsers().then(users => console.log(users));
