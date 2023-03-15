import React from 'react';
import { burgers } from '../ProductArray';
import Burger from './Burger';
import { FoodHeader } from './styles/FoodHeader';


const BurgerList = () => {
    return (
        <div className='container p-5' id='services'>
        
        <FoodHeader>
          <h1>Burger's</h1>
        </FoodHeader>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
            {burgers.map(burger => (
              <Burger key={burger.id} burger={burger} />
            ))}
        </div>

      </div>
    );
}

export default BurgerList;
