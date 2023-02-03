 var teacher = "Sanket";
 function fun() {
    console.log(teacher);
   // console.log(content);
    var teacher = "Razz"; //above this, region is called temporal dead zone
    let content = "JS";
    if (content == "JS") {
        let hours = "120+";
        console.log(hours);
    }
    console.log(teacher, content);
 }
 fun();
 console.log(teacher);