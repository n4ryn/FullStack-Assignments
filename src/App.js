import React, { useState } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState(0);
  const [value, setValue] = useState(true);

  function onAdd() {
    const updatedValue = num + 1;
    setNum(updatedValue);
    if (updatedValue > 0) {
      checkValue(false);
    }
  }

  function onSub() {
    const updatedValue = num - 1;
    setNum(updatedValue);
    if (updatedValue === 0) {
      checkValue(true);
    }
  }

  const checkValue = (value) => {
    setValue(value);
  };

  const clearScreen = () => {
    setNum(0);
  };

  return (
    <div className="main">
      <div className="arth">
        <button type="submit" onClick={onAdd}>
          Add
        </button>
        <button type="submit" onClick={onSub} disabled={value}>
          Sub
        </button>
      </div>
      <p>{num}</p>
      <div className="clr">
        <button type="submit" onClick={clearScreen}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default App;
