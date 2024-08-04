"use client";

import { useState, useEffect, useRef } from "react";

export default Counter;

function Counter() {
  const [ageFirst, setAgeFirst] = useState(true);

  let age, setAge, name, setName;

  if (ageFirst) {
    [age, setAge] = useState(20);
    [name, setName] = useState("John");
  } else {
    [name, setName] = useState("John");
    [age, setAge] = useState(20);
  }

  return (
    <div className="my-3 flex w-full items-center justify-center">
      <div className="flex max-w-fit flex-col items-center justify-center rounded-md bg-zinc-150 px-5 py-3">
        <div>
          <p className="my-0">age: {age}</p>
          <p className="my-0 mb-4">name: {name}</p>
        </div>

        <button
          onClick={() => setAgeFirst(!ageFirst)}
          className="block rounded-md bg-slate-800 px-2 py-1 text-white transition hover:bg-zinc-600"
        >
          change
        </button>
      </div>
    </div>
  );
}
