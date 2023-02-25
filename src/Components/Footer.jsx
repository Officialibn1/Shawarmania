import React from 'react';

import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <section className="py-4 py-lg-3 footer-dark bg-dark text-light text-start" >
                <div className="container">

                    {/* Flex Container */}
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">


                        {/* Contact Us */}
                        <div>
                            <div class="d-flex mt-4">
                                <i className="bi bi-geo-alt Text me-3 h2"></i>
                                <p className='fw-light P'>
                                    Besite Infinity Studio,<br /> Opp. City Chef Restaurant, <br /> State Low-cust, Lapai, Niger State.
                                </p>
                            </div>
                            
                            <div class="d-flex align-items-center">
                                <i className="bi bi-envelope Text me-3 h2"></i>
                                <p className='fw-light P2 my-auto'>
                                    shawarmania@gmail.com
                                </p>
                            </div>
                        </div>
                   
                        {/* About Us */}
                        <ul className='UL d-flex flex-column text-center flex-md-row gap-3 mt-4'>
                            <Link className='A' to="/"><li className="LI">About Us</li></Link>
                            <Link className='A' to="/"><li className="LI">Team</li></Link>
                            <Link className='A' to="/"><li className="LI">Gallery</li></Link>
                        </ul>


                        {/* Social Icons */}
                        <div className="d-flex gap-3 mt-4 text-center">
                            <a href="https://instagram.com/shawarmania_ng?igshid=YmMyMTA2M2Y="><i className="bi bi-instagram h3 Text"></i></a>
                            <a href="https://wa.me/message/QUC6ZCU7LXTVG1"><i className="bi bi-whatsapp h3 Text"></i></a>
                            <a href="instagram.com"><i className="bi bi-facebook h3 Text"></i></a>
                        </div>

                    </div>
                </div>
            </section>
        </footer>
    );
}

export default Footer;
