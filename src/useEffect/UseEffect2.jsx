import { useEffect, useState } from "react";

function UseEffect2() {
  const [widthCount, setWidthCount] = useState(window.innerWidth);

  const actualWidth = () => {
    console.log(window.innerWidth);
    setWidthCount(window.innerWidth);
  };

  useEffect(() => {
    console.log("Add Event");
    window.addEventListener("resize", actualWidth);

    return () => {
      console.log("Remove Event");
      window.removeEventListener("resize", actualWidth);
    };
  }, [actualWidth]);

  return (
    <div>
      <p>The actual size of the window is :</p>
      <h1>{widthCount}</h1>
    </div>
  );
}

export default UseEffect2;
