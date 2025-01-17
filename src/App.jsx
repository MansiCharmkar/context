import Parent from "./components/Parent";
import UseStateObj from "./components/UseStateObj";
import { CountProvider } from "./context/CountContext";
import HooksWithArray from "./useState/HooksWithArray";
import UseStateComponent from "./useState/UseStateComponent";

/*

[[[ CONTEXT (count, addCount) ]]]

1. Parent
    1.1 Child1 ()
    1.2 Child2 ()
        1.3 GrandChild ()
*/

function App() {
  return (
    <div>
      {/* <CountProvider>
        <Parent />
      </CountProvider> */}

      {/* <UseStateComponent /> */}
      <HooksWithArray />
      {/* <UseStateObj /> */}
    </div>
  );
}

export default App;
