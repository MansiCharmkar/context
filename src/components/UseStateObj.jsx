import { useState } from "react";

function UseStateObj() {
  const [myName, setMyName] = useState({
    name: "Divya",
    age: 20,
    degree: "MCS",
  });
  function changObj() {
    setMyName({ ...myName, name: "Ashi" });
  }
  return (
    <div>
      <h1>
        Name : {myName.name} & Age : {myName.age} and Degree :{myName.degree}
      </h1>
      <button onClick={changObj}>update</button>
    </div>
  );
}

export default UseStateObj;
