import { useContext, useState } from "react";
import { createContext } from "react";

const CountContext = createContext();

function CountProvider({ children }) {
  const [count, setCount] = useState(0);
  const addCount = function () {
    setCount(function (count) {
      return count + 1;
    });
  };

  return (
    <CountContext.Provider value={{ count: count, addCount: addCount }}>
      {children}
    </CountContext.Provider>
  );
}

// Custom Hooks

function useCount() {
  const context = useContext(CountContext);

  if (context === undefined) {
    throw new Error("Trying to use useCount hook outside the CountProvider");
  }

  return context;
}

export { CountProvider, useCount };
