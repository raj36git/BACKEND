//Undefined to Number gives NaN
let x = undefined;
console.log(10-x);
// let y = Number.parseInt(x);
// console.log(y);

 //Null gets converted into 0 implicitly/internally
// let x = null;
//  console.log(10 - x); //it will give 10 bcuz null gets converted into 0 and get subtracted from 10

/*
//Boolean 
console.log(10-true); // true gets converted into 1
console.log(10-false); // false gets converted into 0
*/

/*  
//Number
console.log(10-1); 
// it will directly do operation
*/
/*
//String-: A valid string which can be converted to number must be passed

console.log(10 + "6"); 
//in case of string,  it converts number into string and concatenate both(addition case)

console.log(10-"2");
 //in case of string,  it converts string into number and do operation (subtraction case)
*/

//Symbol to Number throws TypoError

//Objects:- it has some process to convert, first it do ToPrimitive(input, Preferred type)....








