import React from 'react';
import { FoodHeader } from './styles/FoodHeader';
import { H1 } from './styles/H1H2H3';

const ShawarmaList = () => {
    return (
      <div className='container p-5' id='services'>
        
        <FoodHeader>
          <h1>Shawarma's</h1>
        </FoodHeader>

        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">

          <div class="col">
            <div class="card">
              <img src="./images/burger6.jpeg" class="card-img-top bg-light" alt="..." />
              <div class="card-body">
                <H1 class="card-title Text">Burger<span>~Regular~</span></H1>
                <p class="card-text Number">N1,200.00</p>
              </div>
              <div className="card-footer text-end">
                <a href="/" className='Text btn btn-warning text-light'>Order Now</a>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card">
              <img src="./images/shawarma.jpeg" class="card-img-top bg-light" alt="..." />
              <div class="card-body">
                <H1 class="card-title Text">Shawarma <br /><span>~Beef & sausage~</span></H1>
                <p class="card-text Number">N1,200.00</p>
              </div>
              <div className="card-footer text-end">
                <a href="/" className='Text btn btn-warning text-light'>Order Now</a>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card">
              <img src="./images/burger6.jpeg" class="card-img-top bg-light" alt="..." />
              <div class="card-body">
                <H1 class="card-title Text">Burger<span>~Regular~</span></H1>
                <p class="card-text Number">N1,200.00</p>
              </div>
              <div className="card-footer text-end">
                <a href="/" className='Text btn btn-warning text-light'>Order Now</a>
              </div>
            </div>
          </div>

        </div>

      </div>
    );
}

export default ShawarmaList;
