import { useCount } from "../context/CountContext";

function GrandChild() {
  const { count, addCount } = useCount();
  return (
    <div>
      ( GrandChild ) count: {count}
      <div>
        <button onClick={addCount}>AddCount</button>
      </div>
    </div>
  );
}

export default GrandChild;
