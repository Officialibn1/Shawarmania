import { Link, NavLink, Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import BookRoute from "./Components/BookRoute";
// import BookLayout from "./Components/BookLayout";
// import BookList from "./Components/BookList";
// import NewBook from "./Components/NewBook";
function App() {

//   Creating routes using JavaScript without JSX
  // const routes = useRoutes([
  //   {
  //     path: '/',
  //     element: <BookLayout />,
  //     children: [
  //       {
  //         index: true,
  //         element: <Home />
  //       },
  //       {
  //         path: 'books',
  //         element: <BookList />,
  //       },
  //       {
  //         path: 'books/new',
  //         element: <NewBook />
  //       },
  //       {
  //         path: '*',
  //         element: <NotFound />
  //       }
  //     ]
  //   }

  // ])


  return (
    <div className="Div">
      <div className="content" >
        <Routes>
          <Route path="/books" element={<h4>List of Book Content Links from First Route</h4>} />
        </Routes>
        <nav>
          <ul>
            <li><NavLink to='/' /*style={({isActive}) => isActive ? {color: 'red'} : {color: 'green'}}*/>
                Home
              </NavLink></li>
            <li><NavLink  to='/books' >BookList</NavLink></li>
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
