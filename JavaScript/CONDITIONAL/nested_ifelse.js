var ageCategory = 18;

if (ageCategory<5) {
    console.log("You are infant");
} else if (ageCategory<13) {
    console.log("You are child");
} else if (ageCategory>19) {
   if (ageCategory<30) {
    console.log("You are young");
   } else if (ageCategory<50) {
    console.log("You are Adult man");
   } else if(ageCategory<65){
    console.log("You are becoming old");
   } else{
    console.log("You are old man");
   }
} 