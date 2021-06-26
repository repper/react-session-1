import React, { useState } from "react";

interface Props {}

const Counter = (props: Props) => {
  const [count, setCount] = useState(0);


  return (
    <div style={{ padding: 20 }}>
      <h3>Counter Example</h3>
      <h5>{count}</h5>

      <button style={{ marginRight: 10 }} onClick={() => setCount(count + 1)}>
        +
      </button>

      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};

export default Counter;
