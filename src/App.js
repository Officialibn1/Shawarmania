import Counter from "./Components/Counter";
import Nav from "./Components/Nav";
import { useState } from "react";


function App() {
// Function for the App
  const [toggle, setToggle] = useState(false)
  const [counter, setCounter] = useState(0)

// Toggle Function
  const toggler = () => {
    setToggle((prev) => prev = !prev)
  }

// Counter Function

  // Increment
  const increment = () => {
    setCounter(counter + 1)
  }

  // Decrement
  const decrement = () => {
    setCounter(counter === 0 ? 0 : counter - 1)
  }


  return (
    <div className="App">
      <Nav toggler={toggler} />
      <Counter toggle={toggle} increment={increment}
      decrement={decrement} counter={counter} />
    </div>
  );
}

export default App;
