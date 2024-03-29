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
// import CheckoutModal from './Components/CheckoutModal';
// import CheckoutProvider from './CheckoutContext';

function App() {
  return (
   
      <div>
        <div class="alert alert-warning alert-dismissible fade show" role="alert" style={{margin: '0px', fontSize: '12px'}}>
          <strong>Dear Customers, Please Note</strong> This Website does not support payment, but will direct you to our Official WhatsApp to make transactions. We'll make sure to add online payment soon. Thank You.  
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
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
