let x = -0;
console.log(x==0); //true
console.log(x===0); //true
console.log(x.toString()); //0
console.log(Object.is(x,-0)); //true
console.log(Object.is(x,0)); //false

console.log(Math.sign(-6)); 
console.log(Math.sign(6));
console.log(Math.sign(-0));
console.log(Math.sign(0));

console.log(x<0);
// Can we write a custom functiom that give sign of a number properly  -> -1,1