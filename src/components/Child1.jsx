import { useCount } from "../context/CountContext";

function Child1() {
  const { count } = useCount();
  return <div>(Child1) count:{count}</div>;
}

export default Child1;
