import { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("0");

  const handleNumberClick = (e) => {
    setResult(result === "0" ? e.target.name : result.concat(e.target.name));
  };

  const handleClear = () => {
    setResult("0");
  };

  const handleDel = () => {
    setResult(result.slice(0, -1));
  };

  const calculatePercentage = () => {
    if (result) {
      const percentage = eval(result) / 100;
      setResult(percentage.toString());
    }
  };

  const calculateResult = () => {
    try {
      const value = eval(result);
      setResult(value.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="container">
      <h2>Simple Calculator</h2>
      <div className="display">{result}</div>
      <div className="keypad">
        <button onClick={handleDel}>DEL</button>
        <button onClick={handleClear}>AC</button>
        <button name="/" onClick={handleNumberClick}>
          /
        </button>
        <button name="%" onClick={calculatePercentage}>
          %
        </button>
        <button name="7" onClick={handleNumberClick}>
          7
        </button>
        <button name="8" onClick={handleNumberClick}>
          8
        </button>
        <button name="9" onClick={handleNumberClick}>
          9
        </button>
        <button name="*" onClick={handleNumberClick}>
          &#215;
        </button>
        <button name="4" onClick={handleNumberClick}>
          4
        </button>
        <button name="5" onClick={handleNumberClick}>
          5
        </button>
        <button name="6" onClick={handleNumberClick}>
          6
        </button>
        <button name="-" onClick={handleNumberClick}>
          -
        </button>
        <button name="1" onClick={handleNumberClick}>
          1
        </button>
        <button name="2" onClick={handleNumberClick}>
          2
        </button>
        <button name="3" onClick={handleNumberClick}>
          3
        </button>
        <button name="+" onClick={handleNumberClick}>
          +
        </button>
        <button name="0" onClick={handleNumberClick}>
          0
        </button>
        <button name="." onClick={handleNumberClick}>
          .
        </button>
        <button onClick={calculateResult}>=</button>
      </div>
    </div>
  );
}

export default App;
