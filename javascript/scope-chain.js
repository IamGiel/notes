'use strict';
//they can nest inside function scopes
//when an inner function needs to use a variable, it looks up to what is called a scope chain
//looks at variable inside its own function scope, if not found,
//it looks outer function scope until it reaches the global scope

//the scope chain is define the way the program is written in a file

function foo(){
  console.log(myVar);
}
function goo() {
  var myVar = 1;
  foo();
}
goo();//myVar is not defined!

//this is because javascript follows a lexical program
//which means codes are executed the way they are written on the page/file
//scope chain means that `myVar` is looking for its definition in its outside scope
//it doesnt find it! so it is undefined. To fix this,

var myVar = 1;
function goo(){
  function foo() {
    console.log(myVar);
  }
}

goo();//goo is called