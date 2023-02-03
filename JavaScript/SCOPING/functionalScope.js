
function fun(){
    var y = 11;
    console.log(y); //11
}
fun();
  console.log(y); 
//error cuz y is functional scope and can't be accessed outsode


 function gun(){
     console.log(y);  //undefined
    var y = 11;
    console.log(y); //11
}
gun();