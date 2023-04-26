import React from "react";
import { Component } from "react";

class ClassCounterOne extends Component{

    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }

    componentDidMount(){
        document.title= `Clicked count: ${this.state.count}`
    }

    componentDidUpdate(prevProps, prevState ){
        document.title=`Clicked count: ${this.state.count}`
    }

    render(){
        return (
            <div>
                <button onClick={ ()=> this.setState({count:this.state.count+1})}>
                    Add Count 
                </button>
                <h1>
                    count: {this.state.count}
                </h1>
            </div>
        );
    }

}

export default ClassCounterOne