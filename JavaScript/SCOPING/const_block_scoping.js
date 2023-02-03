var teacher = "Sanket"; //global
function fun() {       //global
   console.log(teacher);
   console.log(content);
   var teacher = "Razz"; //functional
   const content = "JS";   //fun scope
   
   if (content == "JS") {
       const hours = "120+"; //if scope
       console.log(hours);
   }
   console.log(teacher, content);
}
fun();
console.log(teacher);