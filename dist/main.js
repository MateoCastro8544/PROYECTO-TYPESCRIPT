"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Declaramos los arrays vacios para llenarlos espues 
let students = [];
let teachers = [];
let activities = [];
let courses = [];
//crea una lista quemada en el input Area de Teacher
var Area;
(function (Area) {
    Area["Desarrollo"] = "Desarrollo de Software";
    Area["Marketing"] = "Marketing";
    Area["Turismo"] = "Turismo";
    Area["Dise\u00F1o"] = "Dise\u00F1o de Modas";
})(Area || (Area = {}));
// Funcion para agregar los estudiantes
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
//funcion para agregar los profesores
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
function addActivity() {
    let currentActivity = {
        activityName: readFormHtml("activity")
    };
    activities.push(currentActivity);
    console.table(activities);
    initSelect();
}
function addCourses() {
    let currentCourses = {
        courseName: readFormHtml('course')
    };
    courses.push(currentCourses);
    console.table(courses);
    initSelect();
}
//sirve para pasar los datos quemados a los input select 
function initSelect() {
    let area = document.getElementById("area");
    let areas = Object.values(Area);
    areas.forEach((value) => {
        let option = document.createElement("option");
        option.value = value;
        option.text = value;
        area.add(option);
    });
    let courseGradeBook = document.getElementById("course-GradeBook");
    document.querySelectorAll("#course-GradeBook option").forEach(option => option.remove());
    courses.forEach((value) => {
        let option = document.createElement("option");
        option.value = value.courseName;
        option.text = value.courseName,
            courseGradeBook.add(option);
    });
    let activityGradeBook = document.getElementById("activity-GradeBook");
    document.querySelectorAll("#activity-GradeBook option").forEach(option => option.remove());
    activities.forEach((value) => {
        let option = document.createElement("option");
        option.value = value.activityName;
        option.text = value.activityName,
            activityGradeBook.add(option);
    });
}
/*
funcion para optimizar la lectura de los input del html y luego pasar
a las funciones de estuduante y profesor  */
function readFormHtml(id) {
    return document.getElementById(id).value;
}
initSelect();
