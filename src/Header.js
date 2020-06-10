import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';


import './styles/styles.css';

function Header() {
    return (
        <div className="header-container">
            <nav className="header">
                <img className="icon" src="https://news.ycombinator.com/y18.gif" alt="hackernews logo" />
                <Link to='/' className="nav-item">Hacker news</Link>
                <Link to='/' className="nav-item">Top</Link>
                <Link to='/new' className="nav-item">New</Link>
                <Link to='/best' className="nav-item">Best</Link>
                <Link to='/ask' className="nav-item">Ask</Link>
                <Link to='/show' className="nav-item">Show</Link>
                <Link to='/jobs' className="nav-item">Jobs</Link>
            </nav>

        </div>
    )
}

export default Header;