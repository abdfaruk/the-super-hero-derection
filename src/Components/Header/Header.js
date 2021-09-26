import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header-side header-body">
            <div className="header-text">
                <h1>Hire your employees</h1>
                <p>If you need a programmer or web developer then you can hire them from here</p>
                <h3>Budget for minimum wage: $1000 for each employee</h3>
            </div>
            <div className="header-nav">
                <nav>
                    <a href="/home">HOME</a>
                    <a href="/about">ABOUT</a>
                    <a href="/hire">HIRE</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;