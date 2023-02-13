// setTimeout(function timer() {
//     console.log("after some time I am printed");
// }, 2220);

function fun(x, fn){
    for(let i=0; i<=5; i++){
        console.log(i);
    }
    fn(x+x+x);
}

fun(10, function sum(num){
    console.log(num);
}); //calling fun