import React from "react";
import { Component } from "react";

class SubscribeComp extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome to XYZ youtube channel",
    };
    
  }
  onSubsribe(){
    console.log("on subsribe");
    this.setState(
        {
            message:"Thank you for subscribe"
        }
    )
  }

  render() {
    return (
      <div>
        <h1> {this.state.message}</h1>
        <br></br>
        <button onClick={()=>this.onSubsribe()} style={{
            border:"none",
            backgroundColor:"red",
            padding:"30px, 60px",
            textAlign:"center",
            color:"white",
        }}> Subscribe  <i className="fa fa-bell"></i> </button>
      </div>
    );
  }
}

export default SubscribeComp;
