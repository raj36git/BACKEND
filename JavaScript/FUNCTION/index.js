//write a program to find odd or even
function isEven(num) {
    if (num %2==0) {
        return true;
    } else{
        return false;
    }
}
let x = 6;
if (isEven(x)) {
    console.log("Even");
} else{
    console.log("Odd");
}

