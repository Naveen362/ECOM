import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    // Start the interval only once, when the component mounts
    const id = setInterval(() => {
      setCount(count + 1); // Use functional update to access the previous state
    }, 2000);
    
    setIntervalId(id);
    console.log(count)



    return () => {
      clearInterval(id); // Clear the interval when the component unmounts
      console.log("Interval cleared");
    };
  }, [count]);

  const handleClearInterval = () => {
    if (intervalId) {
      clearInterval(intervalId);
      console.log("Interval manually cleared");
    }
  };

  return (
    <div>
      <p>You called {count} times</p>
      <button onClick={handleClearInterval}>Click me to stop</button>
      {true ? <h3>Welcome</h3> : <h3>Well</h3>}
    </div>
  );
}

export default Counter;
