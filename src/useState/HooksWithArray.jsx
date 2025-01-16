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
    name: "shalni",
    age: 21,
  },
];

function HooksWithArray() {
  const [data, setData] = useState(BioData);

  function clearData() {
    setData([]);
  }
  return (
    <>
      {data.map((curData) => (
        <p key={curData}>
          Name : {curData.name} & Age : {curData.age}
        </p>
      ))}
      <button onClick={clearData}>Clear</button>
    </>
  );
}

export default HooksWithArray;
