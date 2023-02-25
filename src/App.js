import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import ShawarmaList from './Components/ShawarmaList';
import Search from './Components/Search';
import Footer from './Components/Footer';
import BurgerList from './Components/BurgerList';

function App() {
  return (
      <div>
        <Nav />
        <Header />
        <Search />
        <ShawarmaList />
        <BurgerList />
        <Footer />
      </div>
  );
}



export default App;
