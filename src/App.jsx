import Parent from "./components/Parent";
import UseStateObj from "./components/UseStateObj";
import { CountProvider } from "./context/CountContext";
import FormValidation from "./form/FormValidation";
import UseEffect1 from "./useEffect/UseEffect1";
import UseEffect2 from "./useEffect/UseEffect2";
import HooksWithArray from "./useState/HooksWithArray";
import ShortCirVal from "./useState/ShortCirVal";
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
      {/* <HooksWithArray /> */}
      {/* <UseStateObj /> */}
      {/* <ShortCirVal /> */}
      {/* <FormValidation /> */}
      {/* <UseEffect1 /> */}
      <UseEffect2 />
    </div>
  );
}

export default App;
