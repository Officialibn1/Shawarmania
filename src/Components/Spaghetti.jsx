import React from 'react';
import styled from 'styled-components';
import { FoodHeader } from './styles/FoodHeader';
import { H1, Button } from './styles/H1H2H3';

const Card = styled.div`
  transition: all .3s ease;
  box-shadow: -3px 0px 3px 0px rgba(0, 0, 0, .1), 3px 3px 3px 0px rgba(0, 0, 0, .1);
  
  &:hover{
    box-shadow: -5px 2px 10px 0px rgba(0, 0, 0, .2), 5px 5px 15px 0px rgba(0, 0, 0, .2);
  }
`

const Spaghetti = () => {
    return (
        <div className='container p-5' id='services'>
        
            <FoodHeader>
            <h1>Spaghetti</h1>
            </FoodHeader>

            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-3">

                <div className="col">
                    <Card className="card">
                        <img src='./images/Spaghetti.jpeg' className="card-img-top bg-light" alt="..." />
                        <div className="card-body">
                            <H1 className="card-title Text">Spaghetti Jollof<br /><span>~Double Compartment TakeAway~</span></H1>
                            <p className="card-text Number">N2,000.00</p>
                        </div>
                        <div className="card-footer d-flex">
                            <Button href="/" className=' btn btn-sm btn-warning text-light mx-auto'>Order Now</Button>
                        </div>
                    </Card>
                </div>
                
                <div className="col">
                    <Card className="card">
                        <img src='./images/Spaghetti.jpeg' className="card-img-top bg-light" alt="..." />
                        <div className="card-body">
                            <H1 className="card-title Text">Spaghetti Jollof<br /><span>~Regular TakeAway~</span></H1>
                            <p className="card-text Number">N1,700.00</p>
                        </div>
                        <div className="card-footer d-flex">
                            <Button href="/" className=' btn btn-sm btn-warning text-light mx-auto'>Order Now</Button>
                        </div>
                    </Card>
                </div>
            </div>
      </div>
    );
}

export default Spaghetti;
