import React,{useState} from "react";
import './Calculator.css';
function Calculator() {
const [first, setfirst] = useState();
const [second, setSecond] = useState();

const ops=['/','*','+','-','.',];
const updatefirst =(value)=>{
    if(
        ops.includes(value)&& first === "" ||
        ops.includes(value)&& ops.includes(first.slice(-1))
    )
    {
        return;
    }
    setfirst(first + value)
}
    const number =()=>{
        const digits=[];
        for(let i=1; i<10;i++){
        digits.push(
            <button onClick={()=>updatefirst(i.toString())} key={i}>{i}</button>
        )
    }
    return digits;
    }
  return (
    <div className="calculator_parent">
      <div className="calculator">

      <div className="ans">
          <h2><span>0</span>
          {first}
           </h2>
      </div>

        <div className="digits">
          <button onClick={()=>updatefirst("+")}>+</button>
          <button onClick={()=>updatefirst("-")}>-</button>
          <button onClick={()=>updatefirst("/")}>/</button>
          <button onClick={()=>updatefirst("*")}>*</button>
          <button>Del</button>
        </div>

        <div className="numbers">
                {number()}
            <button onClick={()=>updatefirst("0")}>0</button>
            <button onClick={()=>updatefirst("%")}>%</button>
            <button onClick={()=>updatefirst(".")}>.</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
