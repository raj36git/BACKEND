
var teacher = "Mom"; //global
function fun() {
    var teacher = "Mistake"; //functional
    var content;
    console.log(teacher);
    console.log(content); //undefined
}

function gun() {
    var teacher = "Guilt"; //functional
    console.log(teacher);
}

//console.log(content); //error cuz content is functional scope not global now
fun();
gun();
console.log(teacher); //Mom
