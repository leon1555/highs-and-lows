import React from 'react';
import './App.css';
import {NavLink} from 'react-router-dom';

function Nav() {
  
    return (
        <nav>
            <ul className="nav-links">
                <NavLink activeClassName="current" to='/about'>
                    <li>About</li>
                </NavLink>
                <NavLink activeClassName="current" to='/game'>
                    <li>Game</li>
                </NavLink>
                <NavLink activeClassName="current" to='/records'>
                    <li>High Scores</li>
                </NavLink>
                <NavLink activeClassName="current" to='/home'>
                    <li>Log Out</li>
                </NavLink>
            </ul>
        </nav>
    );
    
}

export default Nav;