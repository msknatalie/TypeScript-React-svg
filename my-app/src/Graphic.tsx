import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Graphic.css";
import App from "./App";
import { isThisTypeNode } from "typescript";

interface IMyProps {
  title: string; // The name of the Graphic
  verticalLine: number[]; // The x-axis and y-axis coordinates of the start and of the end of the line
  horizontalLine: number[]; // The x-axis and y-axis coordinates of the start and of the end of the line
  values1: number[]; // The list of points that makes up the polyline. All coordinate values are in the user coordinate system.
  // newValues1: number[]
}
interface IMyState {
  newValues1: string;
}

class Graphic extends Component<IMyProps, IMyState> {
  render() {
    let newValues1 = this.props.values1.splice(' ').toString();
    console.log(newValues1);

    return (
      <div className="Graphic">
        <h1>{this.props.title}</h1>
        <div>
          <svg height="400" width="400">
            <line
              x1={this.props.verticalLine[0]}
              y1={this.props.verticalLine[1]}
              x2={this.props.verticalLine[2]}
              y2={this.props.verticalLine[3]}
            />
            <text x="20" y="220" fill="black">
              График
            </text>
            <line
              x1={this.props.horizontalLine[0]}
              y1={this.props.horizontalLine[1]}
              x2={this.props.horizontalLine[2]}
              y2={this.props.horizontalLine[3]}
            />
            <polyline className="lineRed" points={this.state.newValues1} />
          </svg>
        </div>
      </div>
    );
  }
}

export default Graphic;
