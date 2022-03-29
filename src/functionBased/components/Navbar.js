import React from "react"
import { NavLink, Outlet } from "react-router-dom"


const Navbar = () => {

    return (
        <>  
            <br />
            <nav className="centre">
                <NavLink to="home">Home</NavLink> | {" "}
                <NavLink to="about">About</NavLink> | {" "}
                <NavLink to="jow">Wrong</NavLink>
            </nav>
            <br />
            <hr />
            <br />
            <Outlet />
        </>
    )
}

export default Navbar