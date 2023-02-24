import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './Components/Cards';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Subscribe from './Components/Subscribe';

function App() {
  return (
      <div>
        <Nav />
        <Header />
        <Subscribe />
        <Cards />
      </div>
  );
}



export default App;
