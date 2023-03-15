import React from 'react';
import { Link } from 'react-router-dom';
import { StyledNavigator } from './styles/Navigator.styles';

const Navigator = () => {
    return (
        <StyledNavigator>
            <div className="container px-md-3">
                <ul className="gap-2">
                    <li className="nav-item">
                        <Link className="link" to='/'>Shawarma</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="link" to='/burger'>Burger</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="link" to='/spaghetti'>Spaghetti</Link>
                    </li>
                </ul>
            </div>
        </StyledNavigator>
    );
}

export default Navigator;
