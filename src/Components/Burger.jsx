import React from 'react';
import { H1 } from './styles/H1H2H3';

const Burger = ({burger}) => {
    return (
        <div class="col">
            <div class="card">
              <img src={burger.SRC} class="card-img-top bg-light" alt="..." />
              <div class="card-body">
                <H1 class="card-title Text">{burger.title}<br/><span>{burger.span}</span></H1>
                <p class="card-text Number">{burger.price}</p>
              </div>
              <div className="card-footer text-end">
                <a href="/" className='Text btn btn-warning text-light'>Order Now</a>
              </div>
            </div>
          </div>

    );
}

export default Burger;
