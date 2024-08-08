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
      <div className="flex max-w-fit flex-col items-center justify-center rounded-md bg-zinc-100 p-3">
        <Input />
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
          className="block rounded-md bg-slate-800 px-2 py-1 text-white transition hover:bg-zinc-600"
        >
          Clicked {counter} times
        </button>
      </div>
    </div>
  );
}
