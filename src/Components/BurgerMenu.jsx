import './BurgerMenu.css';
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="hamburger-menu">
            <button className="hamburger-icon" onClick={toggleMenu}>
                {isOpen ? '✖' : '☰'}
            </button>
            <div className={`menu ${isOpen ? 'open' : ''}`}>
                <NavLink to="/" className="menu-item" activeClassName="active" end>
                    <span>#</span>home
                </NavLink>
                <NavLink to="/projects" className="menu-item" activeClassName="active">
                    <span>#</span>projects
                </NavLink>
                <NavLink to="/about-me" className="menu-item" activeClassName="active">
                    <span>#</span>about-me
                </NavLink>
                <NavLink to="/music" className="menu-item" activeClassName="active">
                    <span>#</span>music
                </NavLink>
            </div>
        </div>
    );
}

export default BurgerMenu;
