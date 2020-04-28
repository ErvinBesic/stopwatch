import React from "react";

export default class Stopwatch extends React.Component {
  render() {
    return (
      <div>
        <div>{this.state.timer} </div>
      </div>
    );
  }
}
