import React from 'react';

const Subscribe = () => {
    return (
        <section className="bg-light p-5" id='subscribe'>
            <div className="container d-lg-flex justify-content-between">
                <h2 className='text-warning fw-light'>Subscribe for Deals & Promo New's</h2>
                <div className="input-group inputGroup">
                    <input type="email" className="form-control" placeholder='Enter Your Email...' />
                    <button className="btn btn-dark">Send</button>
                </div>
            </div>
        </section>
    );
}

export default Subscribe;
