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
        <h1>{this.props.title}</h1>  {/* the name of the Graphic */}
        <div>
          <svg height="400" width="400">
            <line
              x1={this.props.verticalLine[0]} // The x-axis coordinate of the start of the line
              y1={this.props.verticalLine[1]} // The y-axis coordinate of the start of the line.
              x2={this.props.verticalLine[2]} // The x-axis coordinate of the end of the line.
              y2={this.props.verticalLine[3]} // The y-axis coordinate of the end of the line.
            />
            <text x="20" y="220" fill="black">
              График
            </text>
            <line
              x1={this.props.horizontalLine[0]} // The x-axis coordinate of the start of the line
              y1={this.props.horizontalLine[1]} // The y-axis coordinate of the start of the line.
              x2={this.props.horizontalLine[2]} // The x-axis coordinate of the end of the line.
              y2={this.props.horizontalLine[3]} // The y-axis coordinate of the end of the line.
            />
            <polyline
            className="lineRed"
              points={this.props.pointsRed} // The list of points that makes up the polyline. All coordinate values are in the user coordinate system.
            />
            <polyline
            className="lineGreen"
              points={this.props.pointsGreen} // The list of points that makes up the polyline. All coordinate values are in the user coordinate system.
            />
          </svg>
        </div>
      </div>
    );
  }
}

export default Graphic;
