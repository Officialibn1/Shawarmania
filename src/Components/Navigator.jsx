import React from 'react';
import { Link } from 'react-router-dom';
import { StyledNavigator } from './styles/Navigator.styles';

const Navigator = () => {
    return (
        <StyledNavigator>
            <div className="container px-md-3">
                <ul class="gap-2">
                    <li class="nav-item">
                        <Link class="link" to='/'>Shawarma</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="link" to='/burger'>Burger</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="link" to='/spaghetti'>Spaghetti</Link>
                    </li>
                </ul>
            </div>
        </StyledNavigator>
    );
}

export default Navigator;
