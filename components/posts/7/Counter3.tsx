"use client";

import { useState, useEffect, useRef, useCallback, memo } from "react";

export default App;

function App() {
  const [counter, setCounter] = useState(0);

  function Input() {
    const [text, setText] = useState("");

    return (
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="block rounded-md px-2 py-1 transition"
      />
    );
  }

  return (
    <div className="my-3 flex w-full items-center justify-center">
      <div className="dark:bg-zinc-750 flex max-w-fit flex-col items-center justify-center gap-3 rounded-md bg-zinc-150 p-3">
        <Input />
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
          className="block rounded-md bg-zinc-800 px-2 py-1 text-white transition focus:ring focus:ring-zinc-400 active:bg-zinc-600 dark:bg-zinc-200 dark:text-black dark:focus:ring-zinc-500 dark:active:bg-zinc-300"
        >
          Clicked {counter} times
        </button>
      </div>
    </div>
  );
}
