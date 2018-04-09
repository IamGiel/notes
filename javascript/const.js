//const declares immutable variables
const foo = "hello world!"
foo = "me!";



//the variable is immutable but its VALUES are not
//therefore, we can still change the value of its a cont properties

const foo = {};
foo["aloha"] = "me!";
console.log(foo);


//to make its porperties immutable we can use Object.freeze(...) function

const foo = Object.freeze({});
foo["aloha"] = "me!";
console.log(foo);