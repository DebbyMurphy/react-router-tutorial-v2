import React from "react";
import { Link } from "react-router-dom";
// import './App.css';


function Nav() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
        </nav>
    );
}

export default Nav;