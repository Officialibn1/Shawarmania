import { Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import Book from './Components/Book';
function App() {


  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/books" element={<Book />} />
    </Routes>
  );
}

export default App;
