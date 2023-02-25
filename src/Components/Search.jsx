import React from 'react';
import { FoodHeader } from './styles/FoodHeader';

const Search = () => {
    return (
        <section className="bg-light p-lg-5 p-3 mb-5" id='search'>
            <div className="container d-lg-flex justify-content-between">
                <FoodHeader>
                    <h2>
                        Search for your favourites...
                    </h2>
                </FoodHeader>
                <div className="input-group inputGroup mt-3">
                    <input type="search" className="form-control" placeholder='Search...' />
                    <button className="btn btn-warning text-light">Search</button>
                </div>
            </div>
        </section>
    );
}

export default Search;
