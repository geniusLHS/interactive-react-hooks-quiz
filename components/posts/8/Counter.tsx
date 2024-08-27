"use client";

import { useState, useEffect, useRef, useCallback, memo } from "react";

export default Counter;

function Text({ text }: { text: string }) {
  const [value, setValue] = useState(text);

  return (
    <div className="rounded-md bg-zinc-200 px-2 py-1 dark:bg-zinc-700">
      {value}
    </div>
  );
}

function Counter() {
  const [list, setList] = useState(["A", "B", "C", "D"]);
  const handleListInsertClick = () => {
    setList((prevList) => ["E"].concat(prevList));
  };

  return (
    <div className="my-3 flex w-full items-center justify-center">
      <div className="dark:bg-zinc-750 flex max-w-fit flex-col items-center justify-center rounded-md bg-zinc-150 p-3">
        <div className="mb-3 grid grid-cols-12 gap-2">
          {list.map((item, index) => (
            <Text key={index} text={item} />
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
