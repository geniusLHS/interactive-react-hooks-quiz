"use client";

import { useState, useEffect, useRef, useCallback, memo } from "react";

export default CounterWithConsole;

const Counter = memo(function Counter({
  consoleLog,
}: {
  consoleLog: (text: string) => void;
}) {
  const [count, setCount] = useState(0);

  function handleAlertClick() {
    setTimeout(() => {
      consoleLog("count = " + count);
    }, 3000);
  }

  return (
    <div className="bg-zinc-150 flex max-w-fit flex-col items-center justify-center gap-3 rounded-md p-3">
      <p>You clicked {count} times</p>
      <button
        onClick={() => setCount(count + 1)}
        className="block rounded-md bg-slate-800 px-2 py-1 text-white transition focus:ring focus:ring-gray-400 active:bg-zinc-600"
      >
        increase count
      </button>
      <button
        onClick={handleAlertClick}
        className="block rounded-md bg-slate-800 px-2 py-1 text-white transition focus:ring focus:ring-gray-400 active:bg-zinc-600"
      >
        console.log
      </button>
    </div>
  );
});

const Console = memo(function Console({
  consoleLogs,
}: {
  consoleLogs: string[];
}) {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [consoleLogs]);

  return (
    <div className="bg-zinc-150 w-48 rounded-md p-3">
      <strong>Console</strong>
      <div className="h-52 overflow-auto" ref={listRef}>
        <ul className="">
          {consoleLogs.map((item, index) => (
            <li key={index} className="">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

function CounterWithConsole() {
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);

  const consoleLog = useCallback((text: string) => {
    setConsoleLogs((consoleLogs) => consoleLogs.concat([text]));
  }, []);

  return (
    <div className="my-3 flex w-full flex-row items-center justify-center gap-5">
      {/* <div className="flex max-w-fit flex-row items-center justify-center rounded-md bg-zinc-100 p-3"> */}
      <Counter consoleLog={consoleLog} />
      <Console consoleLogs={consoleLogs} />
      {/* </div> */}
    </div>
  );
}
