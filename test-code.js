
// //==================
// adding 
// $(document).ready(function () {
//     //testing for connection to html file
//     console.log("nice, js file is linked.");
//     //on click event
//     $("#btn").on("click", function(event){
//         //event.stopPropagation();//stops parent listeners from firing or `bubbling`
//         //event.preventDefault();//prevents default action to ensue, (e.g ink, submit etc...)
        
//         password();
//         return false; //also works as a `preventDefault`/`stopPropagation` in this situation 
//     })


//     const password = function() {
//         // const lowerCasePin = pin.toLowerCase();
//         // const pinArr = lowerCasePin.split();
//         const pw = $("#passWord").val().trim();
//         const pin = pw;
//         const regex = /\d/g;

//         console.log(pin);
//         console.log("pin length", pin.length)

//         function hasNumbers(t) {
            
//             return regex.test(t);
//         }    

        
//         if ((pin.length >= 4) && (pin.length <= 6)) {
//             console.log("good not less than 4, not over 6");
//             alert("good not less than 4, not over 6");
//             return true;
//         } else if (pin.length > 6) {
//             console.log("too much");
//             alert("too much");
//             return false;
//         } else if (pin.length < 3) {
//             console.log("a little more please");
//             alert("a little more please");
//             return false;
//         } else if (pin.indexOf(/^[a-zA-Z]*$/) > -1) {
//             console.log("only digits please");
//             alert("only digits please");
//             return false;
//         }

      
//             $("#passWord").val("");   
//     }
// });

// ============
// class Parent {
//   constructor(arg) {
//     console.log("constructing Parent with", arg);
//   }
// }
// class Child extends Parent {}
// new Child(5);

//============
// Make a list
// var ul = document.createElement('ul');
// document.body.appendChild(ul);

// var li1 = document.createElement('li');
// var li2 = document.createElement('li');
// ul.appendChild(li1);
// ul.appendChild(li2);

// function hide(e){
//   // e.target refers to the clicked <li> element
//   // This is different than e.currentTarget which would refer to the parent <ul> in this context
//   e.target.style.visibility = 'hidden';
// }

// // Attach the listener to the list
// // It will fire when each <li> is clicked
// ul.addEventListener('click', hide, false);

//  DESTRUCTURING IN ES6 
//  source: https://gist.github.com/yang-wei/3d35e8692dbc6cc0f98d

// var array = [1, 2, 3, 4, 5, 6];
// // rest parameter
// var [a, b, ...c] = array;

// console.log(c);//3, 4, 5, 6
// console.log(a);// 1
// // console.log(h);//not defined

// var object = {a: "A", b: "B", c: "C", john:"JOHN"};
// var nestedObject = {a: "A", b: "B", c: "C", x: {y: "Y", z: "Z"}};

// var {a: A, b: B, c: C, john:JOHN} = object;
// console.log("this is value: ", A, B, C, JOHN);
// // ------ "A" "B" "C"

// var {a: A, b: B, c: C, x: X} = nestedObject;
// console.log(X);
// // {y: "Y", z: "Z"}

// es6 for of loop

let Jacob = {};
let arr = [1, true, "false", Jacob, "John"];

// for (let i of arr) {
//   console.log(i);
// }

// output 
// 1
// 2
// 3
// 4
// 5

// for (let i=0;  i < arr.length; i++){
//   console.log(i);
// }
// output 
// 0
// 1
// 2
// 3
// 4

// for (let i of arr) {
//   let test = arr[i];
//   console.log(test);
// }
for (let i=0;  i < arr.length; i++){
  let test = arr[i];
  console.log(test);
}


