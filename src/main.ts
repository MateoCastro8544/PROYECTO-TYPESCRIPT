import { Activity } from "./enties/activity";
import { Course } from "./enties/course";
import { Student } from "./enties/student";
import { Teacher } from "./enties/teacher";

//Declaramos los arrays vacios para llenarlos espues 
let students : Student[] = [];
let teachers : Teacher[] = [];
let activities : Activity[] = [];
let courses : Course [] = [];

//crea una lista quemada en el input Area de Teacher
enum Area{
    Desarrollo = "Desarrollo de Software",
    Marketing = "Marketing",
    Turismo = "Turismo",
    Diseño = "Diseño de Modas"
}

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


function addActivity():void {
    let currentActivity : Activity = {
        activityName : readFormHtml ("activity") 
    }

    activities.push(currentActivity)
    console.table(activities);
    initSelect()
}

function addCourses():void {
    let currentCourses : Course = {
        courseName : readFormHtml ('course')
    }

    courses.push(currentCourses);
    console.table(courses);
    initSelect()
}








//sirve para pasar los datos quemados a los input select 
function initSelect():void {
    let area = document.getElementById("area") as HTMLSelectElement;
    let areas = Object.values(Area)
    areas.forEach(
        (value) => {
            let option = document.createElement("option");
            option.value = value;
            option.text = value;
            area.add(option)
        }
    );

    let courseGradeBook = document.getElementById("course-GradeBook") as HTMLSelectElement;
    document.querySelectorAll("#course-GradeBook option").forEach(option => option.remove())   
courses.forEach(
    (value) => {
     let option = document.createElement("option"); 
       option.value = value.courseName;
       option.text = value.courseName,
       courseGradeBook.add(option);
    }
);

    let activityGradeBook = document.getElementById("activity-GradeBook") as HTMLSelectElement;
    document.querySelectorAll("#activity-GradeBook option").forEach(option => option.remove())   
    activities.forEach(
    (value) => {
    let option = document.createElement("option"); 
    option.value = value.activityName;
    option.text = value.activityName,
    activityGradeBook.add(option);
    }
);
}

/* 
funcion para optimizar la lectura de los input del html y luego pasar
a las funciones de estuduante y profesor  */
function readFormHtml(id:string):string{
    return (<HTMLInputElement>document.getElementById(id))!.value;
}


initSelect()

