import { useCount } from "../context/CountContext";
import GrandChild from "./GrandChild";

function Child2() {
  const { count } = useCount();
  return (
    <div>
      (Child2) count:{count}
      <GrandChild />
    </div>
  );
}

export default Child2;
