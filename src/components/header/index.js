import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => { 
    return (
        <header>
            <Link to='/movies'>
                <h1>
                    Movie Library
                </h1>
            </Link>
            <Link to='/movie/create'>
                <button>Create Movie</button>
            </Link>
        </header>
    )
}

export default Header;