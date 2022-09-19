import { Button } from "@mui/material";
import React from "react";
import './NavBar.css'
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <div className="navBar">
                <h1>SaveTheNature</h1>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">FAQ</NavLink>
                    </li>
                    <li>
                        <Button variant="contained" color="success">Login</Button>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default NavBar;