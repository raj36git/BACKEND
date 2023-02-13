let count = 0;
let y = setInterval(function exac(){
    count++;
    console.log(count);
    if(count >=15){
        clearInterval(y)
    }
}, 2000);