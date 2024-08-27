"use client";

import { useState, useEffect, useRef } from "react";

export default Counter;

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="my-3 flex w-full items-center justify-center">
      <div className="dark:bg-zinc-750 flex max-w-fit flex-col items-center justify-center rounded-md bg-zinc-150 p-3">
        <p> you clicked {count} times </p>
        <button
          onClick={() => {
            setCount(count + 1);
            setCount(count + 1);
          }}
          className="block rounded-md bg-zinc-800 px-2 py-1 text-white transition focus:ring focus:ring-zinc-400 active:bg-zinc-600 dark:bg-zinc-200 dark:text-black dark:focus:ring-zinc-500 dark:active:bg-zinc-300"
        >
          increase count
        </button>
      </div>
    </div>
  );
}
