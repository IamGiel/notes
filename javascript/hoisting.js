//we use 'use strict': which means a variable has to be declared  before it is used.

'use strict';
console.log(a);//will print `undefined` because of variable hoisting
var a = 1;

//this means that
var a = 1;
//also means

'use strict';
var a; //var a is hoisted to the very top of the script/function
console.log(a);//a is not defined
a = 1;

//hoisting is done by javascript to variables and functions.
//this is why you can call function even if the function is declared on the bottom of a script