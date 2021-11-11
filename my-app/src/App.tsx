import React from "react";
import logo from "./logo.svg";
import Graphic from "./Graphic";
import "./App.css";

function App() {
  return (
    <div className="App">
        <h1>Welcome</h1>
        <Graphic
          title="the First Graphic"
          verticalLine={[10, 0, 10, 200]}
          horizontalLine={[200, 200, 10, 200]}
          pointsRed="10,200 30,100 60,40 80,120 120,140 200,180"
          pointsGreen="10,200 40,180 80,80 120,100 150,140 200,120"
        />
    </div>
  );
}

export default App;