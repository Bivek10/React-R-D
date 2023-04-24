import React from "react";

function Greet(props){
    if(props.name === "Bivek Karki"){
    return <h1>Hello {props.name} </h1>
    }
    return <h1>Hello Stranger</h1>
}
// const Greet = (props)=> <h1>Hello {props.name}</h1>

export default Greet