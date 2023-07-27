import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const zero = () => {
    setCount(0);
  };
  return (
    <div>
      <h1 style={{ fontSize: "70px" }}>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={zero}>Zero</button>
    </div>
  );
};

export default Count;
