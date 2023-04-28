import React, { useState, useEffect } from "react";

function IntervalHookCounter() {
  const [count, setCount] = useState(0);
  const tick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000)
    console.log(`interval ${interval}`)
    return ()=>{
        console.log(`un mount count ${count}`)
        clearInterval(interval)
    }
  }, [count]);

  return <div>{count}</div>;
}

export default IntervalHookCounter;
