import { useState } from "react";

function ShortCirVal() {
  const [demo, setDemo] = useState("Veer");
  return (
    <div>
      <h1>{demo || "Technology"}</h1>
      <h2>{demo && "Shiva"}</h2>
    </div>
  );
}

export default ShortCirVal;
