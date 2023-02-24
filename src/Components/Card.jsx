import React from 'react';

const Card = ({card}) => {
    return (
        <div className='col-md-6 col-lg-3'>
            <div className="card bg-dark text-light">
                <div className="card-body text-center">
                    <div className="h1 mb-3">
                        <i className={card.icon}></i>
                    </div>
                    <div className="card-text">
                        <p className="lead">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque autem nostrum eveniet qui odio rem maxime itaque suscipit, beatae asperiores.
                        </p>
                    </div>
                    <a href="/" className="btn btn-warning px-3">Read More</a>
                </div>
            </div>
        </div>
    );
}

export default Card;
