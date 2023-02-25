import React from 'react';

const Search = () => {
    return (
        <section className="bg-light p-lg-5 p-3 mb-5" id='search'>
            <div className="container d-lg-flex justify-content-between">
                <h2 className='text-warning fw-light'>Search for your favourites...</h2>
                <div className="input-group inputGroup mt-3">
                    <input type="search" className="form-control" placeholder='Search...' />
                    <button className="btn btn-warning text-light">Search</button>
                </div>
            </div>
        </section>
    );
}

export default Search;
