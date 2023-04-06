import React from 'react';
import styled from 'styled-components';
import { H1, Button } from './styles/H1H2H3';

const Card = styled.div`
  transition: all .3s ease;
  box-shadow: -3px 0px 3px 0px rgba(0, 0, 0, .1), 3px 3px 3px 0px rgba(0, 0, 0, .1);
  
  &:hover{
    box-shadow: -5px 2px 10px 0px rgba(0, 0, 0, .2), 5px 5px 15px 0px rgba(0, 0, 0, .2);
  }
`

const Burger = ({burger}) => {
    return (
        <div className="col">
            <Card className="card">
              <img src={burger.SRC} className="card-img-top bg-light" alt="..." />
              <div className="card-body">
                <H1 className="card-title Text">{burger.title}<br/><span>{burger.span}</span></H1>
                <p className="card-text Number">{burger.price}</p>
              </div>

              <div className="card-footer d-flex">
                <Button as='a'
                        href='https://wa.me/message/QUC6ZCU7LXTVG1'
                        className=' btn btn-sm btn-warning text-light mx-auto'
                >Order Now</Button>
              </div>
            </Card>
          </div>

    );
}

export default Burger;
