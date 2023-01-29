import React from 'react';
import { useOutletContext, useParams } from 'react-router-dom';

const Book = () => {
    const {id} = useParams();
    const text = useOutletContext();
    return (
        <>
        <h1>
           Book {id} 
        </h1>
        <h1> {text.text} </h1>
        </>
    );
}

export default Book;
