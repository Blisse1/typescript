"use strict";
// Utility Types
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assignment1 = {
    studentId: "compsci123",
    title: "Final Proyect",
    grade: 0,
};
// console.log(updateAssignment(assignment1, {grade: 95}));
const assignGraded = updateAssignment(assignment1, { grade: 95 });
// Required and Readonly
const recordAssignment = (assign) => {
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
// Record
const hexColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
};
const finalGrades = {
    Sara: "A",
    Kelly: "U",
};
const gradeData = {
    Sara: { assign1: 85, assign2: 91 },
    Kelly: { assign1: 76, assign2: 15 }
};
// de Assingment esta seleccionando ambas como keys
const score = {
    studentId: "k123",
    grade: 85,
};
const preview = {
    studentId: "k123",
    title: "Final Proyect",
};
// And this is gonna be only A and B because we extracted them
