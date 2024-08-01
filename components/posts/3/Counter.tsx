"use client";

import { useState, useEffect, useRef, useCallback, memo } from "react";

export default CounterWithConsole;

const Counter = memo(function Counter({
  consoleLog,
}: {
  consoleLog: (text: string) => void;
}) {
  const [count, setCount] = useState(0);
  const [countObj, setCountObj] = useState({ count: 0 });

  // console.log("rerendered");
  consoleLog("rerendered");

  return (
    <div className="flex max-w-fit flex-col items-center justify-center gap-3 rounded-md bg-zinc-100 p-3">
      <button
        onClick={() => setCount(0)}
        className="block rounded-md bg-slate-800 px-2 py-1 text-white transition hover:bg-zinc-600"
      >
        update count
      </button>
      <button
        onClick={() => setCountObj({ count: 0 })}
        className="block rounded-md bg-slate-800 px-2 py-1 text-white transition hover:bg-zinc-600"
      >
        update countObj
      </button>
    </div>
  );
});

const Console = memo(function Console({
  consoleLogs,
}: {
  consoleLogs: string[];
}) {
  return (
    <div className="w-48 rounded-md bg-zinc-100 p-3">
      <strong>Console</strong>
      <div className="flex h-52 flex-col-reverse overflow-auto">
        <ul className="">
          {consoleLogs.map((item, index) => (
            <li key={index} className="text-sm">
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
