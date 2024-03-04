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
