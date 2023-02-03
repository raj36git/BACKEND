var teacher = "Mom";
function fun() {
    var teacher = "Mistake";
    content = "bakwas";
    console.log(teacher);
}

function gun() {
    var teacher = "Guilt";
    console.log(teacher);
}

console.log(content); //it will give error cuz not assigned earlier in fun()
fun();
gun();
console.log(teacher);
