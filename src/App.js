import { Link, Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import BookList from './Components/BookList';
import Book from './Components/Book';
import NewBook from './Components/NewBook';
import NotFound from './Components/NotFound';
function App() {


  return (
    <div className="Div">
      <div className="content" >
        <nav>
          <ul>
            <li><Link to='/' >Home</Link></li>
            <li><Link to='/books' >BookList</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/books/:id" element={<Book />} />
          <Route path="/books/new" element={<NewBook />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
