import React from "react";

import { Component } from "react";
import "./Counter.css"

class Counter extends Component {
  
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }

  onIncrement(){
    this.setState(state=>({
      count:state.count+1
    }))
  }

  onDecrement(){
    this.setState(state=>({
      count:state.count-1
    }))
  }

  render() {
    return (
      <div className="CounterDiv">
        <h1>Count value: {this.state.count} </h1>
        <div className="ButtonsView">
          <button className="Increment"  onClick={()=>this.onIncrement()}>
            {" "}
            <i className="fa fa-plus"></i>
          </button>
          <button className="Decrement" onClick={()=>this.onDecrement()}>
            {" "}
            <i className="fa fa-minus "> 
            </i>
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;