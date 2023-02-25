import React from 'react';
import Shawarma from './Shawarma';
import { FoodHeader } from './styles/FoodHeader';

const Shawarmas = [
  {SRC: './images/ChickenShawarmaWrap.png', title: 'Shawarma', span: '~Chicken & sausage~', price: 'N1,200.00'},
  {SRC: './images/ChickennoSausage.jpg', title: 'Shawarma', span: '~Chicken No sausage~', price: 'N1,000.00'},
  {SRC: './images/ChickenShawarmaWrap.png', title: 'Shawarma', span: '~Beef & sausage~', price: 'N1,200.00'},
  {SRC: './images/BeefnoSausage.jpg', title: 'Shawarma', span: '~Beef No Sausage~', price: 'N1,000.00'},
  {SRC: './images/AndSausage.jpg', title: 'Shawarma', span: '~Cheese & Sausage~', price: 'N1,700.00'},
  {SRC: './images/ComboShawarma.jpeg', title: 'Shawarma', span: '~Cheese & Double Sausage~', price: 'N2,000.00'},
  {SRC: './images/NoSausageShawarma.jpg', title: 'Shawarma', span: '~Cheese No Sausage~', price: 'N1,500.00'},
  {SRC: './images/MeatyandCheese.jpg', title: 'Shawarma', span: '~Meaty & Cheese & Sausage~', price: 'N2,000.00'},
  {SRC: './images/MeatynoSausage.jpg', title: 'Shawarma', span: '~Meaty No sausage~', price: 'N1,500.00'},
  {SRC: './images/CheeseShawarma.png', title: 'Shawarma', span: '~Meaty With Cheese & Double Sausage~', price: 'N2,400.00'},
  {SRC: './images/PitaShawarma.jpg', title: 'Shawarma', span: '~Pita~', price: 'N1,800.00'},
  {SRC: './images/Combo.jpg', title: 'Shawarma', span: '~Combo~', price: 'N1,500.00'},
  {SRC: './images/ComboShawarma.jpeg', title: 'Shawarma', span: '~Combo & Cheese~', price: 'N2,000.00'},
  {SRC: './images/shawarma.jpeg', title: 'Shawarma', span: '~Combo & Double Sausage~', price: 'N1,800.00'},
]

const ShawarmaList = () => {
    return (
      <div className='container p-5' id='services'>
        
        <FoodHeader>
          <h1>Shawarma's</h1>
        </FoodHeader>

        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
            {Shawarmas.map(shawarma => (
              <Shawarma key={shawarma.index} shawarma={shawarma} />
            ))}
        </div>

      </div>
    );
}

export default ShawarmaList;
