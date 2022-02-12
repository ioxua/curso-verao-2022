import "./App.css";
import { useState } from "react";

function App() {
  console.log("chamou o App()");
  const [counter, setCounter] = useState(0);

  const incrementar = () => {
    console.log("incrementar");
    // setCounter((current) => {
    //   return current + 1;
    // });
    setCounter(counter + 1);
  };

  const decrementar = () => {
    console.log("dcrementar");
    setCounter((current) => {
      return current - 1;
    });
  };

  return (
    <div className="App">
      <button onClick={decrementar}>Decrementar</button>
      <b>Contador: {counter}</b>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default App;
