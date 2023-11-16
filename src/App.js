import { React, useState } from "react";
import "./App.css";

export default function App() {
  const [counter, setCounter] = useState(0);

  //increase counter
  const increase = () => {
    setCounter((count) => count + 1);
  };

  //decrease counter
  const decrease = () => {
    setCounter((count) => count - 1);
  };

  //reset counter
  const reset = () => {
    setCounter(0);
  };
  return (
    <div className="counter">
      <h1>React Counter</h1>
      <span className="counter__output"></span>
      <div className="btn__container">
        <button className="control__btn">+</button>
        <button className="control__btn">-</button>
        {/* <button className="reset">Reset</button> */}
      </div>
    </div>
  );
}
// export default App;
