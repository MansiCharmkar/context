import { useCount } from "../context/CountContext";
import Child1 from "./Child1";
import Child2 from "./Child2";

function Parent() {
  const { count } = useCount();
  return (
    <div>
      ( Parent ) count:{count}
      <Child1 />
      <Child2 />
    </div>
  );
}

export default Parent;
