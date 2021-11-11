import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Graphic.css";
import App from "./App";
import { isThisTypeNode } from "typescript";

interface IMyProps {
  title: string;
  verticalLine: number[];
  horizontalLine: number[];
  pointsRed: string;
  pointsGreen: string;
}
interface IMyState {
}

class Graphic extends Component<IMyProps, IMyState> {

  render() {
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
            <polyline
            className="lineRed"
              points={this.props.pointsRed}
            />
            <polyline
            className="lineGreen"
              points={this.props.pointsGreen}
            />
          </svg>
        </div>
      </div>
    );
  }
}

export default Graphic;
