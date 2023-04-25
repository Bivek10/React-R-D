import React from "react";

import { Component } from "react";

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
    };
  }

  componentDidUpdate() {}

  componentDidMount() {
   this.timerID=  setInterval(() => {
      this.tick();
    }, 1000);
  }


  tick() {
    this.setState({
      date: new Date(),
    });
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Timer;