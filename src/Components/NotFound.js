import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
   const navigate = useNavigate();
   useEffect(() => {
       setTimeout(() => {
            navigate(-1)
       }, 2000);
    }, []);
    return (
        <>
            <h1>
                 Content Not Found 
            </h1>
        </>
    );
}

export default NotFound;
