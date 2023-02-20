import React from 'react';

const Card = ({card}) => {
    return (
        <div className='col-md-6 col-lg-3'>
            <div className="card bg-dark text-light">
                <div className="card-body text-center">
                    <div className="hi mb-3">
                        <i className={card.icon}></i>
                    </div>
                    <div className="card-text">
                        <p className="lead">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero deserunt voluptatibus modi nostrum at eum blanditiis, necessitatibus nam molestias labore doloremque distinctio aspernatur repudiandae cum!
                        </p>
                    </div>
                    <a href="/" className="btn btn-warning">Read More</a>
                </div>
            </div>
        </div>
    );
}

export default Card;
