import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = slowFunction(number);
  const themeMode = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black',
    margin: '20px',
    borderRadius: '5px'
  }
  return (
    <div className="Div">
      <div className="content">
        <input className="Button" type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))}/>
        <button className="Button" onClick={() => setDark(prevDark => !prevDark)}>{dark ? 'Light Mode' : 'Dark Mode'}</button>
        <h1 style={themeMode} >{doubleNumber}</h1>
      </div>
    </div>
  );
}

const slowFunction = (number) => {
 for (let i = 0; i <= 200000000; i++) {
  return number * 2
 } 
}

export default App;
