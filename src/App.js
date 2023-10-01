import { useState } from "react";
import "./styles.css";

export default function App() {
  const [result, setResult] = useState("");
  const fun = (e) => {
    setResult(result.concat(e.target.name));
  };
  const clear = () => {
    setResult("");
  };
  const backspace = () => {
    setResult(result.slice(0, -1));
  };
  const Calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  };
  return (
    <div className="container">
      <form>
        <input type="text" value={result} />
      </form>
      <div className="keypad">
        <button className="highlight" onClick={clear} id="clear">
          Clear
        </button>
        <button className="highlight" onClick={backspace} id="backspace">
          C
        </button>
        <button className="highlight" name="/" onClick={fun}>
          &divide;
        </button>
        <button name="7" onClick={fun}>
          7
        </button>
        <button name="8" onClick={fun}>
          8
        </button>
        <button name="9" onClick={fun}>
          9
        </button>
        <button className="highlight" name="*" onClick={fun}>
          &times;
        </button>
        <button name="4" onClick={fun}>
          4
        </button>
        <button name="5" onClick={fun}>
          5
        </button>
        <button name="6" onClick={fun}>
          6
        </button>
        <button className="highlight" name="-" onClick={fun}>
          &ndash;
        </button>
        <button name="1" onClick={fun}>
          1
        </button>
        <button name="2" onClick={fun}>
          2
        </button>
        <button name="3" onClick={fun}>
          3
        </button>
        <button className="highlight" name="+" onClick={fun}>
          +
        </button>
        <button name="0" onClick={fun}>
          0
        </button>
        <button name="." onClick={fun}>
          .
        </button>
        <button className="highlight" name="=" onClick={Calculate} id="result">
          =
        </button>
      </div>
    </div>
  );
}
