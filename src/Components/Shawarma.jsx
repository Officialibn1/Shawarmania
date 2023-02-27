import React from 'react';
import { H1 } from './styles/H1H2H3';

const Shawarma = ({shawarma}) => {
    return (
        <>
            <div class="col">
                <div class="card">
                    <img src={shawarma.SRC} class="card-img-top bg-light" alt="..." />
                    <div class="card-body">
                        <H1 class="card-title Text">{shawarma.title} <br /><span> {shawarma.span} </span></H1>
                        <p class="card-text Number">{shawarma.price}</p>
                    </div>
                    <div className="card-footer d-flex">
                        <a href="/" className='Text'><i className="bi bi-cart-plus h3"></i></a>
                        {/* <a href="/" className='Text btn btn-warning text-light ms-auto'>Order Now</a> */}
                        <button type="button" class="btn btn-warning text-light ms-auto" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            Order Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Shawarma;
