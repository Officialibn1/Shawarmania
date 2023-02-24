import React from 'react';

const ShawarmaList = () => {
    return (
        <div className='container' id='services'>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        <div class="col">
          <div class="card">
            <img src="./images/burger6.jpeg" class="card-img-top bg-light" alt="..." />
            <div class="card-body">
              <h4 class="card-title Text">Burger <span className='lead'> ~Regular~</span></h4>
              <p class="card-text lead">N1,200.00</p>
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
              <h4 class="card-title Text">Shawarma <span className='lead'> ~Beef & sausage~</span></h4>
              <p class="card-text lead">N1,200.00</p>
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
              <h4 class="card-title Text">Burger <span className='lead'> ~Regular~</span></h4>
              <p class="card-text lead">N1,200.00</p>
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
