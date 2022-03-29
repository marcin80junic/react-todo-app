import React from 'react'
import { Link, Outlet } from "react-router-dom"


const About = (props) => {

    return (
        <div className="centre">
            Hello from About page
            <br />
            <br />
            <ul>
                <li>
                    <Link to="about-app">About App</Link>
                </li>
                <li>
                    <Link to="about-author">About Author</Link>
                </li>
            </ul>
            <br />
            <hr />
            <br />
            <Outlet />
        </div>
    )
}
export default About