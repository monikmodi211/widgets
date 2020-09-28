import React from 'react';

const Header = () => {
    return (
        <div className= "ui secondary pointing menu">
            <a href = "/" className="item">
                Acordion
            </a>
            <a href = "/list" className="item">
                Search
            </a>
            <a href = "/Dropdown" className="item">
                Dropdown
            </a>
            <a href = "/Translate" className="item">
                Translate
            </a>
        </div>
    );
}

export default Header;