console.log("Async code running");
setTimeout(function fn(){
    console.log("This will take time");
    setTimeout(function exac(){
        console.log("OK");
    }, 10);
}, 0);
console.log("Done");