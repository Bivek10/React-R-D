import React, { useEffect, useState } from "react";

function HookMouse() {
  const [x, setX] = useState(0);

  const [y, setY] = useState(0);

  const mouseMoveListener = (e) => {
    console.log("liseting mouse movement");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("use effects: called");
    window.addEventListener("mousemove", mouseMoveListener);

    return ()=>{
      console.log("unmounted listener");
      window.removeEventListener("mousemove", mouseMoveListener)
    }
  },[]);

  return (
    <div>
      <h1>X coordinate: {x}</h1>
      <h1>Y coordinate:{y} </h1>
    </div>
  );

}

export default HookMouse;
