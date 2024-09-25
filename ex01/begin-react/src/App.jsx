import React from "react";
import Hello from "./Hello";
import "./App.css";

// component
function App() {
  const name = "오일남";
  const age = 99;
  const style = { color: "green", fontSize: 24, backgroundColor: "yellow" }
  return (
    <React.Fragment>
      {/* fragment tag */}
      <div>Hello React!</div>
      <Hello />
      <Hello />
      <Hello />
      <div style={style}>이름: {name}</div>
      <div>나이: {age + 1}</div>
      <div className="gray-box"></div>
    </React.Fragment>
  );
}

export default App;
