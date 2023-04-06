import React from 'react';
import { Shawarmas } from '../ProductArray';
import Shawarma from './Shawarma';
import { FoodHeader } from './styles/FoodHeader';


const ShawarmaList = () => {


    return (
      <div className='container p-5' id='services'>
        
        <FoodHeader>
          <h1>Shawarma's</h1>
        </FoodHeader>

        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4">
            {Shawarmas.map(shawarma => (
              <Shawarma key={shawarma.id} shawarma={shawarma} />
            ))}
        </div>

      </div>
    );
}

export default ShawarmaList;
