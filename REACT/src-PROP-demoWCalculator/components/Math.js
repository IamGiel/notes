import React from "react";
// The Math function component accepts a property argument
const Math = (property) => {
  let value;

  // Assign value based on the operator
  switch (property.mathOperation) {
    case "+":
      value = property.num1 + property.num2;
      break;
    case "-":
      value = property.num1 - property.num2;
      break;
    case "*":
      value = property.num1 * property.num2;
      break;
    case "/":
      value = property.num1 / property.num2;
      break;
    default:
      value = NaN;
  }

  // Return a span element containing the calculated value
  // Set the fontSize to the value in pixels
  // Unlike a regular function, a component must always return a React element
  // Null or False are also acceptable return types which won't render anything
  //IN MY OWN WORDS
  return (
    <div>
      <p>This is size {value}</p>
      <span style={{ fontSize: value }}>{value}</span>
    </div>
  );

};

export default Math;
