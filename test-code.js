
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

class Parent {
  constructor(arg) {
    console.log("constructing Parent with", arg);
  }
}
class Child extends Parent {}
new Child(5);



