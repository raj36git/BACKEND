// Higher Order function = these are the funtion which another fn as arguement

function f(a, fn) {
  console.log("Razz");
  fn();
}

f(3, function gun(){
    console.log("I am done");
});

//sorting
let arr = [2, 4, 7, 33, 1, 2, 11, 56, 566, 765];
arr.sort();
console.log(arr); //it will sort array in lexigraphical order -> alphabetical order

//if we want to sort arr numerically, we have to pass another fn as sort arguement
let b = [2, 4, 7, 33, 1, 2, 11, 56, 566, 765];
b.sort(function cmp(x, y) {
  return x < y;
});
console.log(b);
