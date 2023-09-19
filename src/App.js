import "./styles.css";
import { ChildComponent } from "./ChildComponent";
import { useState, useMemo } from "react";
const App = () => {
  const [count, setCount] = useState(0);

  const doubledcount = useMemo(() => {
    return count * 2;
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Count:: {count}</h2>
      <h2>Douubled Count:: {doubledcount}</h2>
      <ChildComponent handleClick={handleClick} />
    </div>
  );
};

export default App;
