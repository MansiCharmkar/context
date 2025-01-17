import { useState } from "react";

const BioData = [
  {
    id: 1,
    name: "Imli",
    age: 20,
  },
  {
    id: 2,
    name: "Amit",
    age: 23,
  },
  {
    id: 3,
    name: "Rupali",
    age: 25,
  },
  {
    id: 4,
    name: "Shalni",
    age: 21,
  },
];

function HooksWithArray() {
  const [elm, setElm] = useState(BioData);

  const clearData = () => {
    setElm([]);
  };

  const handleRemoveData = (id) => {
    const newArrayElm = elm.filter((curElm) => {
      return curElm.id != id;
    });
    setElm(newArrayElm);
  };

  return (
    <>
      {elm.map((curElm) => {
        return (
          <h3 key={curElm}>
            Name : {curElm.name} & Age : {curElm.age}
            <button onClick={() => handleRemoveData(curElm.id)}>remove</button>
          </h3>
        );
      })}
      <button onClick={clearData}>ClearData</button>
    </>
  );
}

export default HooksWithArray;
