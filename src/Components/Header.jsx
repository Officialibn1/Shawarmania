import React from 'react';

const Header = () => {
    return (
        <section className='p-5 bg-dark text-light'>
            <div className="container mt-5">
                <div className="row align-items-center justify-content-center">
                    <div className="text-md-start text-sm-center col-md-6">
                        <h2 className='text-warning'>Shawarmania Fast Foods, Snack and Chups</h2>
                        <p className="lead">
                            We offer you the best and delicious meals you can get in town, all your favourite chups, snacks, pizza's, KFC standard prepared chicken and much more...
                        </p>
                        <button className="btn btn-md btn-warning">
                            Order Now
                        </button>
                    </div>
                    <div className='col-md-6'>
                        <img src="./images/mockup1.png" alt="" className="img img-fluid mt-md-5 mx-auto" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Header;
