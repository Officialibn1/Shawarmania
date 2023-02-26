import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import ShawarmaList from './Components/ShawarmaList';
import Search from './Components/Search';
import Footer from './Components/Footer';
import BurgerList from './Components/BurgerList';
import Spaghetti from './Components/Spaghetti';
import Navigator from './Components/Navigator';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
      <div>
        <Nav />
        <Header />
        <Search />
        <Navigator />
        <Routes>
          <Route path="/" element={<ShawarmaList />}/>
          <Route path="/burger" element={<BurgerList />}/>
          <Route path="/spaghetti" element={<Spaghetti />}/>
        </Routes>
        <Footer />
      </div>
  );
}



export default App;
