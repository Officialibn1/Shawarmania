import React from 'react';
import Burger from './Burger';
import { FoodHeader } from './styles/FoodHeader';

const burgers = [
  {SRC: './images/ChickenBurger.jpg', title: 'Burger', span: '~Chicken~', price: 'N1,600.00'},
  {SRC: './images/BurgerCheeseFries.jpg', title: 'Burger', span: '~Chicken & Fries~', price: 'N2,000.00'},
  {SRC: './images/BurgerDoubleLayer.png', title: 'Burger', span: '~Chicken Double Layer~', price: 'N2,000.00'},
  {SRC: './images/ChickenBurgerCombo.jpg', title: 'Burger', span: '~Combo~', price: 'N3,000.00'},
]

const BurgerList = () => {
    return (
        <div className='container p-5' id='services'>
        
        <FoodHeader>
          <h1>Burger's</h1>
        </FoodHeader>

        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
            {burgers.map(burger => (
              <Burger key={burger.index} burger={burger} />
            ))}
        </div>

      </div>
    );
}

export default BurgerList;
