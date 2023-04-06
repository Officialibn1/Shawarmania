import React from 'react';
import { H1, Button } from './styles/H1H2H3';

const Burger = ({burger}) => {
    return (
        <div className="col">
            <div className="card">
              <img src={burger.SRC} className="card-img-top bg-light" alt="..." />
              <div className="card-body">
                <H1 className="card-title Text">{burger.title}<br/><span>{burger.span}</span></H1>
                <p className="card-text Number">{burger.price}</p>
              </div>

              <div className="card-footer d-flex">
                <Button href="/" className=' btn btn-sm btn-warning text-light mx-auto'>Order Now</Button>
              </div>
            </div>
          </div>

    );
}

export default Burger;
