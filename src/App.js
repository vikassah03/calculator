import "./App.css";
import { useState } from "react";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-", "."];
  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };
  const calculate = () => {
    setCalc(eval(calc).toFixed(2).toString());
  };

  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button
          className="numbers_btn"
          onClick={() => updateCalc(i.toString())}
          key={i}
        >
          <h1>{i}</h1>{" "}
        </button>
      );
    }
    return digits;
  };

  const deleteLast = () => {
    if (calc == "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>({result})</span> : ""}
          <h1 className="margin_0">{calc || "0"}</h1>
        </div>
        <div className="opearters_digits">
          <div className="digits">
            {createDigits()}
            <button className="numbers_btn" onClick={() => updateCalc("0")}>
              <h1 className="margin_0">0</h1>
            </button>
            <button className="numbers_btn" onClick={() => updateCalc(".")}>
              <h1 className="margin_0">.</h1>
            </button>
            <button className="numbers_btn" onClick={() => updateCalc("1")}>
              <h1 className="margin_0">1</h1>
            </button>
          </div>
          <div className="operators">
            <button className="logic_btn" onClick={() => updateCalc("/")}>
              <h1 className="margin_0">/</h1>
            </button>
            <button className="logic_btn" onClick={() => updateCalc("*")}>
              <h1 className="margin_0">*</h1>
            </button>
            <button className="logic_btn" onClick={() => updateCalc("+")}>
              <h1 className="margin_0">+</h1>
            </button>
            <button className="logic_btn" onClick={() => updateCalc("-")}>
              <h1 className="margin_0">-</h1>
            </button>
          </div>
        </div>
          <div className="buttom_btns">
            <button className="numbers_btn" onClick={() => updateCalc("2")}>
              <h1 className="margin_0">2</h1>
            </button>
            <button className="delete_btn" onClick={deleteLast}>
              <h2 className="margin_0">Del</h2>
            </button>
            <button className="calculate_btn" onClick={calculate}>
              <h1 className="margin_0">=</h1>
            </button>
          </div>
      </div>
    </div>
  );
}

export default App;
