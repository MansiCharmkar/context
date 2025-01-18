import { useEffect, useState } from "react";

function UseEffect1() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `chats ${count}`;
  }, [count]);
  console.log("i am outer useEffect function");
  const IncreamentBy1 = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={IncreamentBy1}>Increament</button>
    </>
  );
}

export default UseEffect1;
