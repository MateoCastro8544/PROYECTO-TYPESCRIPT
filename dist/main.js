"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let students = [];
let teachers = [];
function addStudent() {
    let currentStudent = {
        fullName: readFormHtml("nameStudent"),
        identification: parseInt(readFormHtml("idStudent")),
        mail: readFormHtml("mailStudent"),
        direction: readFormHtml("directionStudent"),
        enrollment: parseInt(readFormHtml("enrollment")),
        level: readFormHtml("level")
    };
    students.push(currentStudent);
    console.table(students);
}
function addTeacher() {
    let currentTeacher = {
        fullName: readFormHtml("nameTeacher"),
        identification: parseInt(readFormHtml("idTeacher")),
        mail: readFormHtml("mailTeacher"),
        direction: readFormHtml("directionTeacher"),
        title: readFormHtml("title"),
        area: readFormHtml("area")
    };
    teachers.push(currentTeacher);
    console.table(teachers);
}
function readFormHtml(id) {
    return document.getElementById(id).value;
}
