import React from 'react';
import { headerData } from '../data/data';

const Header = () => {
    return (
        <header>
            <h1>{headerData.name}</h1>
            <p>{headerData.tagline}</p>
        </header>
    );
};

export default Header;
