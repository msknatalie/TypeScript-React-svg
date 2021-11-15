import React, { Component } from "react";
import logo from "./logo.svg";
import Graphic from "./Graphic";
import "./App.css";

class App extends Component {

  render() {
  return (
    <div className="App">
        <h1>Welcome</h1>
        <Graphic
          title="the First Graphic"
          verticalLine={[10, 0, 10, 200]}
          horizontalLine={[200, 200, 10, 200]}
          values1={[20, 70, 50, 80, 10]}
        />
    </div>
  );
}
}

export default App;