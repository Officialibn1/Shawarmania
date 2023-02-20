import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark border border-bottom border-alert fixed-top'>
            <div className="container">
                {/* Brand Logo */}
                <Link to='#' className='navbar-brand'>
                    <h2 className="fw-light text-warning">
                        Shawarmania
                    </h2>
                </Link>

                {/* Toggle Icon */}
                <button className="navbar-toggler" type='button' data-bs-toggle='collapse' data-bs-target='#navMenu'>
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Links */}
                <div id='navMenu' className="collapse navbar-collapse text-sm-center">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active"><Link className='nav-link' to="/">Home</Link></li>
                        <li className="nav-item"><Link className='nav-link' to="/offers">Offers</Link></li>
                        <li className="nav-item"><Link className='nav-link' to="/order">Order</Link></li>
                        <li className="nav-item"><Link className='nav-link' to="/showcase">Showcase</Link></li>
                        <li className="nav-item"><Link className='nav-link' to="/about">About</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        
    );
}

export default Nav;
