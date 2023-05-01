import React, { useEffect, useState } from "react";

function HookCounterFive() {
  const [count, setCount] = useState(0);
  const [name, setName]=useState("");

  useEffect(()=>{
    console.log("Updating useEffects")
    document.title= `You have clicked ${count} times`
  }, [count])


  return <div>
    <input  type="text" value={name} onChange={e=>setName(e.target.value)} /> 
    <button onClick={()=>{setCount(count+1)}}>Increase count:: {count}</button>
  </div>;
}

export default HookCounterFive;
