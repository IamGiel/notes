

// ==========================
// QUESTION 3

// Write a function that converts user entered date formatted as M / D / YYYY to a format required by an API(YYYYMMDD).
// The parameter "userDate" and the return value are strings.
// For example, it should convert user entered date "12/31/2014" to "20141231" suitable for the API.
let userDate = "11/9/2014"
function formatDate(userDate) {
  let replacement = "";
  // format from M/D/YYYY to YYYYMMDD
  let month = userDate.substring(0, userDate.indexOf("/"));
  let day = userDate.substring(3,5);

  if (month < 10) {
    console.log("less 10")
    let beginEditingAnswer = "0" + userDate;
    beginEditingAnswer.toString();
    // remove all forwards slashes
    let removeSlashes = beginEditingAnswer.replace(/\//g, replacement);

    // move last four numbers to the left
    if (removeSlashes.length > 1) {
      let moveOne = removeSlashes.slice(-4) + removeSlashes.slice(0, -4);
      console.log(moveOne);
      // if (moveOne.charAt(4) ==)

      return moveOne;
     // 20141231
    // return beginEditingAnswer

  }

  // work on this 👇🏻

    if (day < 10) {
      console.log("less 10")
      let beginEditingAnswer = userDate;
      beginEditingAnswer.toString();
      // remove all forwards slashes
      let removeSlashes = beginEditingAnswer.replace(/\//g, replacement);

      // move last four numbers to the left
      if (removeSlashes.length > 1) {
        let moveOne = removeSlashes.slice(-4) + removeSlashes.slice(0, -4);
        console.log(moveOne);
        // if (moveOne.charAt(4) ==)

        return moveOne;
        // 20141231
        // return beginEditingAnswer

      }
    }

    // let fourthLetter = moveOne.charAt(4)
    // let fifthLetter = moveOne.charAt(5)
    // let fourthAndFifthLetters = fourthLetter + fifthLetter;

    // var re = new RegExp(fourthAndFifthLetters, "g");

    // let newString = moveOne.replace(re, "")
    // return newString + fourthAndFifthLetters;


  }
  // move the 5th and 6th letters to the last
 
}
// formatDate(userDate)
console.log(formatDate(userDate));

// Note: in Javascript, strings are immutable - an existing string is never modified.
// So any method which makes a modification to the string
// (like concat, replace, slice, substr, substring, toLowerCase, toUpperCase, etc...) 
// ALWAYS returns a new string
// to return the result, save the modified string in a var

// ==========================
// QUESTION 2
// Implement the removeProperty function which takes an object and property name, and does the following:
// If the object obj has a property prop, the
// function removes the property from the object and returns true; in all other cases it returns false.

// let obj = {
//   "Tester": "Gel"
// }
// let prop = "Test"
// function removeProperty(obj) {

//   if (obj.hasOwnProperty(prop)) {
//     // The property DOESN'T exists
//     console.log("true !! ")
//     console.log(obj.hasOwnProperty(prop))
//     delete obj[prop];
//     return true;
//   } else {
//     // The property exists
//     console.log("False !! ")
//     console.log(obj.hasOwnProperty(prop))
//     return false;
//   }
// }
// removeProperty(obj)

// ==========================
// QUESTION 1
// If value does not exist as a parameter of function ensure
// throw an error;
// else return value;

// function ensure(value) {
//   if (value == null || value == undefined) {
//     console.log(Err);
//     return Error("here is an error");
//   } else {
//     console.log(value)
//     return value;
//   }

// }

// ensure();
// ensure(34)