/*

Substraction Operator
let obj = {}
console.log(10-obj); //it gives NaN

let obj1 = {
    x:2,
    y:5
}
console.log(10-obj1); //it still gives NaN

let obj2 = {
    x:2,
    valueOf(){
        return 22;
    }
}
console.log(100-obj2); //now it will perform its operation //ans == 78

let obj3 = {
    x:2,
    toString(){
        return "22";
    }
}
console.log(100-obj3); //now it will perform its operation //ans == 78

let obj4 = {
    x:2,
    valueOf(){
        return "22";
    }
}
console.log(100-obj4); //now it will perform its operation //ans == 78
let obj5 = {
    x:2,
    toString(){
        return {}
    }
}
console.log(100-obj5); //it will returns typo error

*/

//Addition operator
let obj = {}
console.log(obj);
console.log(10+obj); //10[object Object]
console.log("10"+obj); //10[object Object]
