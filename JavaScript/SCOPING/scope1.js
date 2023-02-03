
var teacher = "Mom"; //global
//content = "bakwas";
function fun() {
    var teacher = "Mistake"; //functional
    content = "bakwas"; //when something is not initialize in functional scope it become global scope -> autoglobal
    console.log(teacher);
}

function gun() {
    var teacher = "Guilt"; //functional
    console.log(teacher);
}

fun();
gun();
console.log(teacher); //Mom
console.log(content); //bakwas cuz it is assigned earlier and that makes content a global scope at top