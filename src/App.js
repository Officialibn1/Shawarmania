import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import ShawarmaList from './Components/ShawarmaList';
import Subscribe from './Components/Subscribe';

function App() {
  return (
      <div>
        <Nav />
        <Header />
        <Subscribe />
        <ShawarmaList />
      </div>
  );
}



export default App;
