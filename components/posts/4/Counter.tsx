"use client";

import { useState, useEffect, useRef } from "react";

export default Counter;

function Counter() {
  const [ageFirst, setAgeFirst] = useState(true);

  let age, setAge, name, setName;

  // 빌드 자체가 불가능함
  // if (ageFirst) {
  //   [age, setAge] = useState(20);
  //   [name, setName] = useState("John");
  // } else {
  //   [name, setName] = useState("John");
  //   [age, setAge] = useState(20);
  // }

  // 동작은 정확히 같은 코드임 (local에서 실행 해봄)
  if (ageFirst) {
    age = 20;
    name = "John";
  } else {
    age = "John";
    name = 20;
  }

  return (
    <div className="my-3 flex w-full items-center justify-center">
      <div className="dark:bg-zinc-750 flex max-w-fit flex-col items-center justify-center rounded-md bg-zinc-150 px-5 py-3">
        <div>
          <p className="my-0">age: {age}</p>
          <p className="my-0 mb-4">name: {name}</p>
        </div>

        <button
          onClick={() => setAgeFirst(!ageFirst)}
          className="block rounded-md bg-zinc-800 px-2 py-1 text-white transition focus:ring focus:ring-zinc-400 active:bg-zinc-600 dark:bg-zinc-200 dark:text-black dark:focus:ring-zinc-500 dark:active:bg-zinc-300"
        >
          change
        </button>
      </div>
    </div>
  );
}
