import { useState, useMemo } from "react";

function App() {
 const [count, setCount] = useState(0);
 const [todos, setTodos] = useState([]); 
 const [dark, setDark] = useState(false);
 
const number = useMemo(() => {
  return slowFunction(count);
}, [count]);
 
 //Increment count State Function

 const increment = () => {
  setCount((n) => n < 10 ? n + 1 : n);
 };
 
  const reduceCount = () => {
   setCount((n) => n > 0 ? n - 1 : n );
  };

 const addTodo = () => {
  setTodos((t) => [...t, 'New Todo'])
 };
  return (
    <div className="Div">
      <div className="content">
        <h1 className="H1" >Use Memo 
          <span>{number}</span>
        </h1>
        <button className="Button" onClick={addTodo} >Add Todo</button>
        <div>
          {todos.map((todo, index) => 
            <p key={index} >{todo}</p>
          )}
          
        </div>

        <div>
         <button className="Button margin10" onClick={increment}>+</button> 
          <h1 className="H1 margin10" >{count}</h1> 
        <button className="Button margin10" onClick={reduceCount} >-</button>
        </div>
      </div>
    </div>
  );
}

const slowFunction = (num) => {
  for (let i = 0; i < 400000000; i++) {} 
    return num += 1;

}

export default App;
