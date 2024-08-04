"use client";

import { useState, useEffect, useRef } from "react";

export default Counter;

function Counter() {
  const [boyFirst, setBoyFirst] = useState(true);

  const [name, setName] = useState("john");
  let boyAge, setBoyAge, girlAge, setGirlAge;

  if (boyFirst) {
    [boyAge, setBoyAge] = useState(10);
    [girlAge, setGirlAge] = useState(15);
  } else {
    [girlAge, setGirlAge] = useState(15);
    [boyAge, setBoyAge] = useState(10);
  }

  return (
    <div className="my-3 flex w-full items-center justify-center">
      <div className="flex max-w-fit flex-col items-center justify-center rounded-md bg-zinc-150 px-5 py-3">
        <div>
          <p className="my-0">name: {name}</p>
          <p className="my-0">boy age: {boyAge}</p>
          <p className="my-0 mb-4">girl age: {girlAge}</p>
        </div>

        <button
          onClick={() => setBoyFirst((boyFirst) => !boyFirst)}
          className="block rounded-md bg-slate-800 px-2 py-1 text-white transition hover:bg-zinc-600"
        >
          change
        </button>
      </div>
    </div>
  );
}
