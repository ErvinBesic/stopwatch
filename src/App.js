import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: 0,
      times: [],
    };
  }

  onStart = () => {
    if (this.timerInterval) return;

    this.timerInterval = setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 10);
  };

  onStop = () => {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  };

  onReset = () => {
    this.setState({ timer: 0 });
  };

  onLap = () => {
    this.setState({
      times: [...this.state.times, this.state.timer],
      timer: 0,
    });
  };

  onClear = () => {
    this.setState({
      times: [],
    });
  };

  render() {
    let centiseconds = ("0" + (Math.floor(this.state.timer / 10) % 100)).slice(
      -2
    );
    let seconds = ("0" + (Math.floor(this.state.timer / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(this.state.timer / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(this.state.timer / 3600000)).slice(-2);
    return (
      <div>
        <h1>
          {hours} : {minutes} : {seconds} : {centiseconds}
        </h1>

        <div>
          <button onClick={this.onStart}>START</button>
          <button onClick={this.onStop}>STOP</button>
          <button onClick={this.onLap}>LAP</button>
          <button onClick={this.onReset}>RESET</button>
          <button onClick={this.onClear}>CLEAR</button>
        </div>
        <div>
          {this.state.times.map((time, index) => (
            <div key={index}>{time}</div>
          ))}
        </div>
      </div>
    );
  }
}
