import React from "react";
import {Add, Multiply, Divide,Subtract}from "./Calculator.js";

function Calculator(){
    return(
 <div>
    <h1>Number1 = 10</h1>
   < h1>Number2 = 5</h1>
  <h1>.Addition .Subtraction .Multiplication .Division</h1>
  <h1>&nbsp;&nbsp;{Add(10,5)}   &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  {Subtract(10,5)}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  {Multiply(10,5)}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  {Divide(10,5)}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </h1>

  


 </div>

    )
};

export default Calculator;