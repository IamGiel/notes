import React from "react";
import Math from "./Math";

// Calculator renders the Math component with different props
const Calculator = () => (
  <div>
    {/* Math renders a span tag containing the result */}
    {/* Each span is the font-size of the result in pixels */}
    <p>
      <Math num1={10} mathOperation="+" num2={20} />
      <Math num1={12} mathOperation="+" num2={21} />
      <Math num1={100} mathOperation="+" num2={20} />
    </p>
  </div>
);

export default Calculator;
