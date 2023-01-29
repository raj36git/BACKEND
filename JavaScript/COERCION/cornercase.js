console.log("" + 0); //0
console.log("" + (-0)); //0
console.log("" + []); //it gives a space
console.log("" + {}); //[obj Obj]
console.log("" + [1,2,3]);
console.log("" + [1,null,undefined,7]);
console.log(0- "22"); //-22-Decimal
console.log(0- "2o2"); //NaN
console.log(0- 010); //Octal
console.log(0- 0xa); //hexa
console.log(2-"a");