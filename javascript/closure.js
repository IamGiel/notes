// JAVASCRIPT

// Closure - when a function returns a function,
// the function that is returned keeps a reference to any variables that it needs to execute.

// Closures can refer to variables in outer scopes.
// It can refer to variables in outer functions even if those outer functions have returned.

// an example would be:

var foo = [];
for (var i = 0; i < 10; i++) {
  foo[i] = function() {
    return { i };
  }; //closure
}

console.log(foo[0]()); //your expecting a `0` NO, its gonna print 10
console.log(foo[1]()); //your expecting a `1` NO, its gonna print 10
console.log(foo[2]()); //your expecting a `2` NO, its gonna print 10

//the simple explanation to this is that
//the closure references the `foo[]` after the loop has finished.

//to achieve the desired result we can use Immediately Invoke Functions Expressions (IIFE)

var foo = [];
for (var i = 0; i < 10; i++) {
  (function() {
    var y = i;//we have a `var y` that stores number of times IIF executed
    foo[i] = function() {
      return { y };//we just then return `y`
    };
  })(); //IIF
}
//another way is to pass in `i` on the ending brackets ()
var foo = [];
for (var i = 0; i < 10; i++) {
  (function(y) {
    foo[y] = function() {
      return { y }; //we just then return `y`
    };
  })(i); //added `i` in the ending bracket
}
//when `i` is passed in, it gets passed as y in the function

//SUMMARY:
//Closures - can refer to outer scope functions or variables even if that outer scope has exited.
//Important - Closure points at the value of the outer scope variable not when the closure was executed.
//To Solve a closure problem (as in a forloop above) we can use IIFE's
