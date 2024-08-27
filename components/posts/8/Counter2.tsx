"use client";

import { useState, useEffect, useRef, useCallback, memo } from "react";

export default Counter2;

function Text({ text }: { text: string }) {
  const [value, setValue] = useState(text);

  return (
    <div className="rounded-md bg-zinc-200 px-2 py-1 dark:bg-zinc-700">
      {value}
    </div>
  );
}

function Counter2() {
  const [list, setList] = useState([
    { id: 1, text: "A" },
    { id: 2, text: "B" },
    { id: 3, text: "C" },
    { id: 4, text: "D" },
  ]);
  const handleListInsertClick = () => {
    setList((prevList) => [{ id: 5, text: "E" }].concat(prevList));
  };

  return (
    <div className="my-3 flex w-full items-center justify-center">
      <div className="dark:bg-zinc-750 flex max-w-fit flex-col items-center justify-center rounded-md bg-zinc-150 p-3">
        <div className="mb-3 grid grid-cols-12 gap-2">
          {list.map((item, index) => (
            <Text key={item.id} text={item.text} />
          ))}
        </div>
        <div>
          <button
            onClick={handleListInsertClick}
            className="block rounded-md bg-zinc-800 px-2 py-1 text-white transition focus:ring focus:ring-zinc-400 active:bg-zinc-600 dark:bg-zinc-200 dark:text-black dark:focus:ring-zinc-500 dark:active:bg-zinc-300"
          >
            insert E
          </button>
        </div>
      </div>
    </div>
  );
}
