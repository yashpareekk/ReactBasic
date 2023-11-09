import React, { useState, useCallback } from 'react';
import './Callback.css'; 

const Callback = () => {
 
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const decrement = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  return (
    <div className="counter-container">
      <h2>UseCallback</h2>
      <h1 className="counter-title">Counter</h1>
      <p className="counter-value">Count: {count}</p>
      <button className="counter-button" onClick={increment}>Increment</button>
      <button className="counter-button" onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Callback;
