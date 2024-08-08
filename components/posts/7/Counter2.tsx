"use client";

import { useState, useEffect, useRef, useCallback, memo } from "react";

export default App;

function Counter({ color }: { color: string }) {
  const [count, setCount] = useState(0);

  return (
    <div
      className={
        "m-3 flex max-w-fit flex-col items-center justify-center rounded-md p-3 " +
        (color == "red" ? "bg-red-300" : "bg-blue-300")
      }
    >
      <p>{count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="block rounded-md bg-slate-800 px-2 py-1 text-white transition hover:bg-zinc-600"
      >
        increase count
      </button>
    </div>
  );
}

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="my-3 flex w-full items-center justify-center">
      <div className="flex max-w-fit flex-col items-center justify-center rounded-md bg-zinc-100 p-3">
        {show && <Counter color="red" />}
        {!show && <Counter color="blue" />}
        <button
          onClick={() => setShow(!show)}
          className="block rounded-md bg-slate-800 px-2 py-1 text-white transition hover:bg-zinc-600"
        >
          toggle color
        </button>
      </div>
    </div>
  );
}
