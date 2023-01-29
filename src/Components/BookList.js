import React from 'react';
import { Link } from 'react-router-dom';

const BookList = () => {
    return (
        <>
            <h1>
                BookList 
                <ul>
                    <li><Link to='/books/1'>Book 1</Link></li>
                    <li><Link to='/books/2'>Book 2</Link></li>
                    <li><Link to='/books/New'>New Book</Link></li>
                </ul>
            </h1>
        </>
    );
}

export default BookList;
