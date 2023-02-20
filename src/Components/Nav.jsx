import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark border border-bottom border-alert fixed-top'>
            <div className="container">
                {/* Brand Logo */}
                <Link to='/' className='navbar-brand'>
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
                        <li className="nav-item active"><a className='nav-link' href="#home">Home</a></li>
                        <li className="nav-item"><a className='nav-link' href="#subscribe">Subscribe</a></li>
                        <li className="nav-item"><a className='nav-link' href="#order">Order</a></li>
                        <li className="nav-item"><a className='nav-link' href="#showcase">Showcase</a></li>
                        <li className="nav-item"><a className='nav-link' href="#about">About</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        
    );
}

export default Nav;
