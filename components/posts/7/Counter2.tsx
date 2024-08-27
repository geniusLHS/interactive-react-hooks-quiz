"use client";

import { useState, useEffect, useRef, useCallback, memo } from "react";

export default App;

function Counter({ color }: { color: string }) {
  const [count, setCount] = useState(0);

  return (
    <div
      className={
        "m-3 flex max-w-fit flex-col items-center justify-center rounded-md p-3 " +
        (color == "red"
          ? "bg-red-300 dark:bg-red-700"
          : "bg-blue-300 dark:bg-blue-700")
      }
    >
      <p>{count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="block rounded-md bg-zinc-800 px-2 py-1 text-white transition focus:ring focus:ring-zinc-400 active:bg-zinc-600 dark:bg-zinc-200 dark:text-black dark:focus:ring-zinc-500 dark:active:bg-zinc-300"
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
      <div className="dark:bg-zinc-750 flex max-w-fit flex-col items-center justify-center rounded-md bg-zinc-150 p-3">
        {show && <Counter color="red" />}
        {!show && <Counter color="blue" />}
        <button
          onClick={() => setShow(!show)}
          className="block rounded-md bg-zinc-800 px-2 py-1 text-white transition focus:ring focus:ring-zinc-400 active:bg-zinc-600 dark:bg-zinc-200 dark:text-black dark:focus:ring-zinc-500 dark:active:bg-zinc-300"
        >
          toggle color
        </button>
      </div>
    </div>
  );
}
