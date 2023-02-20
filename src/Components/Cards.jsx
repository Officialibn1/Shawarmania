import React from 'react';
import Card from './Card';

const card =[
    {id: 1, icon: 'bi bi-people'},
    {id: 2, icon: 'bi bi-people'},
    {id: 3, icon: 'bi bi-people'},
    {id: 4, icon: 'bi bi-people'}
]

const Cards = () => {
    return (
        <section className="p-5">
            <div className="container">
                <div className="row justify-content-center align-items-center text-center gap-2">
                    {card.map(card => (
                        <Card card={card} key={card.id} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Cards;
