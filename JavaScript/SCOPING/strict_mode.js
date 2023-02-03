"use strict"; //global strict mode
var teacher = "Mom";
function fun() {
  //  "use strict"; //functional strict mode
    var teacher = "Mistake";
   // content = "bakwas";
    console.log(teacher);
}
function gun() {
    content = "bathkwas";
    var teacher = "Guilt"; //functional
    console.log(teacher);
}
fun();
gun();
console.log(teacher);
console.log(content); //error cuz strict mode don't allow auto global creation