import { useState } from "react";

function UseStateComponent() {
  const [string, setString] = useState("Current String");
  function UpdateString() {
    let str = string;
    if (str === "Current String") {
      setString("Updated String");
    } else {
      setString("Current String");
    }
  }
  return (
    <div>
      <h1>{string}</h1>

      <button onClick={UpdateString}>click me</button>
    </div>
  );
}

export default UseStateComponent;
