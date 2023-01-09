import { useState } from "react";
import Content from "./Components/Content";
import Nav from "./Components/Nav";

function App() {
  //Javascript Functions 
  const [counter, setCounter] = useState(0)
  const [toggle, setToggle] = useState(false)

  //Counter Function
  const incCounter = () => {
    setCounter(counter + 1)
  }

  const decCounter = () => {
    setCounter(counter === 0 ? 0 : counter - 1)
  }

  //Toggle Function
  const Toggle = () => {
    setToggle((prev) => !prev)
  }

  return (
    <div className="App">
      <Nav Toggle={Toggle} />

      <div className="Div">
        <Content counter={counter} incCounter={incCounter} decCounter={decCounter} toggle={toggle} />
      </div>
    </div>
  );
}

export default App;
