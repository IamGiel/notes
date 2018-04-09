//let = is an es6 syntax.
//let solves the block level scope problem that many javascript developers face.  

//example 1
function print1(){
  var a = "something";
  // console.log(a);
}
print1()
console.log(a) //this doesnt print a, and will result in error undefined

//example 2: with a for-loop
function print2(){
  var element = "override var";
  for (var i = 0; i < 10; i++) {
    var element = [i];
  }

  console.log(element);//9 gets printed out

}

print2();

//example 3 with let keyword
function print3(){
  var element = "override var";

  for (var i = 0; i < 10; i++) {
    let element = [i];
  }

  console.log(element);//"override var" gets printed out! WHY? because the `let` key word transforms the loop block as a block level scope

}

print3();

//`block level scope` means that a variable declared inside a function scope is not accessible by global or outer-scope.  
//In the exmaple, we tried to print the values inside the for-loop but instead got the string message.
//This is because let creates a block level scope.
//This is a solution to:

var array = []
for (let i = 0; i < 10; i++) {
  const element = array[i];
}