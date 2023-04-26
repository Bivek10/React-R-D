import React from "react";

import { Component } from "react";

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
      message:"Loading message from constructor"
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

  static getDerivedStateFromProps(props, state) {
    return {message: "Loading message from getDerivedStateFromProps" };
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Timer;