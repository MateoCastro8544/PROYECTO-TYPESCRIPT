import { Student } from "./enties/student";
import { Teacher } from "./enties/teacher";

//Declaramos los arrays vacios para llenarlos espues 
let students : Student[] = [];
let teachers : Teacher[] = [];


// Funcion para agregar los estudiantes
function addStudent():void{
    let currentStudent: Student = {
        fullName: readFormHtml("nameStudent"),
        identification: parseInt(readFormHtml("idStudent")),
        mail: readFormHtml("mailStudent"),
        direction: readFormHtml("directionStudent"),
        enrollment: parseInt (readFormHtml("enrollment")),
        level: readFormHtml ("level")
    }
    students.push(currentStudent);
    console.table(students);
}

//funcion para agregar los profesores
function addTeacher():void{
    let currentTeacher: Teacher = {
        fullName: readFormHtml("nameTeacher"),
        identification: parseInt(readFormHtml("idTeacher")),
        mail: readFormHtml("mailTeacher"),
        direction: readFormHtml("directionTeacher"),
        title: readFormHtml("title"),
        area: readFormHtml("area")
    }

    teachers.push(currentTeacher);
    console.table(teachers);
}

/* 
//funcion para optimizar la lectura de los input del html y luego pasar
//a las funciones de estuduante y profesor  */
function readFormHtml(id:string):string{
    return (<HTMLInputElement>document.getElementById(id))!.value;
}

