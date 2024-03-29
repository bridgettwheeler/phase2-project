import React from 'react';
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };

function NavBar() {
    return (
        <div>
            <NavLink to="/" exact style={linkStyles} activeStyle={{background: "brown",}}>Home</NavLink>
            <NavLink to="/Favorites" exact style={linkStyles} activeStyle={{background: "brown"}}>Favorites</NavLink>
        </div>
    )
}

export default NavBar;