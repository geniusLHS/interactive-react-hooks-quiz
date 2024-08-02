"use client";

import { useState, useEffect, useRef } from "react";

export default Clock;

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setTime(new Date()));
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="my-3 flex w-full items-center justify-center">
      <div className="bg-zinc-150 flex max-w-fit flex-col items-center justify-center rounded-md p-3">
        <p> {time.toLocaleString()} </p>
        <input className="block rounded-md px-2 py-1 transition"></input>
      </div>
    </div>
  );
}
