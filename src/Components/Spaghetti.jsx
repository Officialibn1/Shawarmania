import React from 'react';
import { FoodHeader } from './styles/FoodHeader';
import { H1 } from './styles/H1H2H3';

const Spaghetti = () => {
    return (
        <div className='container p-5' id='services'>
        
            <FoodHeader>
            <h1>Spaghetti</h1>
            </FoodHeader>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">

                <div className="col">
                    <div className="card">
                        <img src='./images/Spaghetti.jpeg' className="card-img-top bg-light" alt="..." />
                        <div className="card-body">
                            <H1 className="card-title Text">Spaghetti Jollof<br /><span>~Double Compartment TakeAway~</span></H1>
                            <p className="card-text Number">N2,000.00</p>
                        </div>
                        <div className="card-footer d-flex">
                            <a href="/" className='Text'><i className="bi bi-cart-plus h3"></i></a>
                            <a href="/" className='Text btn btn-warning text-light ms-auto'>Order Now</a>
                        </div>
                    </div>
                </div>
                
                <div className="col">
                    <div className="card">
                        <img src='./images/Spaghetti.jpeg' className="card-img-top bg-light" alt="..." />
                        <div className="card-body">
                            <H1 className="card-title Text">Spaghetti Jollof<br /><span>~Regular TakeAway~</span></H1>
                            <p className="card-text Number">N1,700.00</p>
                        </div>
                        <div className="card-footer d-flex">
                            <a href="/" className='Text'><i className="bi bi-cart-plus h3"></i></a>
                            <a href="/" className='Text btn btn-warning text-light ms-auto'>Order Now</a>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    );
}

export default Spaghetti;
