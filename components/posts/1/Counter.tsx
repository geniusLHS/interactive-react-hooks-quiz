"use client";

import { useState, useEffect, useRef } from "react";

export default Counter;

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="my-3 flex w-full items-center justify-center">
      <div className="flex max-w-fit flex-col items-center justify-center rounded-md bg-zinc-100 p-3">
        <p> you clicked {count} times </p>
        <button
          onClick={() => {
            setCount(count + 1);
            setCount(count + 1);
          }}
          className="block rounded-md bg-slate-800 px-2 py-1 text-white transition hover:bg-zinc-600"
        >
          increase count
        </button>
      </div>
    </div>
  );
}
