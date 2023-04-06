import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark sticky-top px-lg-3'>
            <div className="container-fluid">
                {/* Brand Logo */}
                <div className="navbar-brand">
                    <Link to='/' className='navbar-brand'>
                        <img src="./images/shawarmania.png" alt="Logo"  className='CustomLogo' />
                    </Link>
                </div>

                {/* Toggle Icon */}
                <button className="navbar-toggler" type='button' data-bs-toggle='collapse' data-bs-target='#navMenu'>
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Links */}
                <div id='navMenu' className="collapse navbar-collapse text-center">
                    <ul className="navbar-nav ms-auto mb-3 mb-lg-0">
                        
                        <li className="nav-item">
                            <Link to='/' className='Text h5 position-relative'>
                                <h6 className="position-absolute top-25 start-100" >5</h6>
                                <i className="bi bi-cart3"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
    );
}

export default Nav;
