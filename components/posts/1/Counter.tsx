"use client";

import { useState, useEffect, useRef } from "react";

export default Counter;

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
          setCount(count + 1);
        }}
      >
        update count
      </button>
    </div>
  );
}
