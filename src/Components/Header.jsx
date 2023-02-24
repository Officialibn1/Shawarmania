import React from 'react';

const Header = () => {
    return (
        <section className='p-5 bg-dark text-light' id='#home'>
            <div className="container mt-5">
                <div className="d-lg-flex align-items-center justify-content-center">
                    <div className="text-md-start text-sm-center ">
                        <h2 className='Text'>Shawarmania Fast Foods, Snack and Chups</h2>
                        <p className="lead">
                            We offer you the best and delicious meals you can get in town, all your favourite chups, snacks, pizza's, KFC standard prepared chicken and much more...
                        </p>
                        <button className="btn btn-md bg-theme btn-warning">
                            Order Now
                        </button>
                    </div>
                    <div className='container d-flex align-items-center justify-content-center'>
                        <img src="./images/shawarmania.png" alt="" className="img img-fluid mt-5 mt-lg-1" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Header;
