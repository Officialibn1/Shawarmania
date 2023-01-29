import { Link, Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import BookLayout from "./Components/BookLayout";
import BookRoute from "./Components/BookRoute";
function App() {


  return (
    <div className="Div">
      <div className="content" >
        <Routes>
          <Route path="/books" element={<h4>List of Book Content Links from First Route</h4>} />
        </Routes>
        <nav>
          <ul>
            <li><Link to='/' >Home</Link></li>
            <li><Link to='/books' >BookList</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />

          {/* Nested Routes */}

          <Route path="/books/*" element={<BookRoute />} />
          
          {/* Normal React Route */}

          <Route path="*" element={<NotFound />} />
          
          {/* <Route path="/books" element={<BookList />} />
          <Route path="/books/:id" element={<Book />} />
          <Route path="/books/new" element={<NewBook />} />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
