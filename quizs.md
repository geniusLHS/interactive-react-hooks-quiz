1. double useState

```js
import { useState, useEffect, useRef } from "react";

export default Counter;

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
          setCount(count + 1);
        }}
      >
        update count
      </button>
    </div>
  );
}
```

2. useState with object

```js
import { useState, useEffect, useRef } from "react";

export default Counter;

function Counter() {
  const [count, setCount] = useState(0);
  const [countObj, setCountObj] = useState({ count: 0 });

  console.log("rerendered");

  return (
    <div>
      <button onClick={() => setCount(0)}>update count</button>
      <button onClick={() => setCountObj({ count: 0 })}>update countObj</button>
    </div>
  );
}
```

3. useState init with function

```js
import { useState, useEffect, useRef } from "react";

export default Counter;

function initial() {
  console.log("heavy calculate");
  return 0;
}

function Counter() {
  const [count, setCount] = useState(initial()); // rendering every times
  // const [count, setCount] = useState(initial) // rendering only one times
  // const [count, setCount] = useState(() => initial()) // rendering only one times

  return (
    <div>
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        update count
      </button>
    </div>
  );
}
```

4. useState with setTimeout

```js
function Counter() {
  const [count, setCount] = useState(0);

  function handleAlertClick() {
    setTimeout(() => {
      alert("You clicked on: " + count);
    }, 3000);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={handleAlertClick}>Show alert</button>
    </div>
  );
}
```

5. useState in if statement

```js
import { useState, useEffect, useRef } from "react";

export default App;

function App() {
  const [isBoy, setIsBoy] = useState(true);

  const [name, setName] = useState("john");
  let boyAge, setBoyAge, girlAge, setGirlAge;

  if (isBoy) {
    [boyAge, setBoyAge] = useState(10);
    [girlAge, setGirlAge] = useState(15);
  } else {
    [girlAge, setGirlAge] = useState(15);
    [boyAge, setBoyAge] = useState(10);
  }

  return (
    <div>
      <p>name: {name}</p>
      <p>boy age: {boyAge}</p>
      <p>girl age: {girlAge}</p>

      <button onClick={() => setIsBoy(!isBoy)}>change</button>
    </div>
  );
}
```

6. useeffect dependency array

```js
function User({ user }) {
  useEffect(() => {
    console.log(`hello ${user.name}`);
  }, [user]);

  return <div>{user.name}</div>;
}

function App() {
  const [count, setCount] = useState(0);
  const user = { name: "geniusLHS" };

  return (
    <div>
      <User user={user} />
      <button onClick={() => setCount(count + 1)}>click me!</button>
    </div>
  );
}
```

7. cleanup in useEffect

```js
function Example() {
  const [count, setCount] = useState(0);

  console.log("A", count);

  useEffect(() => {
    console.log("B", count);
    return () => {
      console.log("C", count);
    };
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Example />, rootElement);
```

8. the key prop

```js
import { useState, useEffect, useRef } from "react";

export default Counter;

function Input({ text }) {
  const [value, setValue] = useState(text);

  return <div>{value}</div>;
}

function Counter() {
  const [list, setList] = useState(["A", "B", "C", "D"]);
  const handleListInsertClick = () => {
    setList((prevList) => ["E"].concat(prevList));
  };

  return (
    <div>
      <div>
        {list.map((item, index) => (
          <Input key={index} text={item} />
        ))}
      </div>
      <div>
        <button onClick={handleListInsertClick}>insert E</button>
      </div>
    </div>
  );
}
```

https://velog.io/@ssoon-m/react-key-%EC%A0%9C%EB%8C%80%EB%A1%9C-%EB%8B%A4%EB%A3%A8%EA%B8%B0

9. condition of preserving state

```js
import { useState, useEffect, useRef } from "react";

export default App;

function Counter({ color }) {
  const [value, setValue] = useState(0);

  return (
    <div style={{ backgroundColor: color, fontSize: 100 }}>
      {value}
      <button onClick={() => setValue(value + 1)}>click me!</button>
    </div>
  );
}

function App() {
  const [show, setShow] = useState(true);

  return (
    <div>
      {/* {show ? <Counter color="red" /> : <Counter color="blue" />} */}
      {show && <Counter color="red" />}
      {!show && <Counter color="blue" />}
      <button onClick={() => setShow(!show)}>click me!</button>
    </div>
  );
}
```

10. component inside component

```js
import { useState } from "react";

export default function MyComponent() {
  const [counter, setCounter] = useState(0);

  function MyTextField() {
    const [text, setText] = useState("");

    return <input value={text} onChange={(e) => setText(e.target.value)} />;
  }

  return (
    <>
      <MyTextField />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Clicked {counter} times
      </button>
    </>
  );
}
```

## [참고](https://react.dev/learn/preserving-and-resetting-state#different-components-at-the-same-position-reset-state)
