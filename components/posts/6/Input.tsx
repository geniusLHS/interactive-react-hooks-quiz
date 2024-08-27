"use client";

import { useState, useEffect, useRef } from "react";

export default Input;

function Input() {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log(text);
    setText("default");
  });

  return (
    <div className="my-3 flex w-full items-center justify-center">
      <div className="dark:bg-zinc-750 flex max-w-fit flex-col items-center justify-center rounded-md bg-zinc-150 p-3">
        <p>{text}</p>
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          className="block rounded-md px-2 py-1 transition"
        />
      </div>
    </div>
  );
}
