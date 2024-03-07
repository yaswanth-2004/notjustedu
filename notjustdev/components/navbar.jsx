import React from "react";
import '../components/navbar.css'

const Navbar = () => {
    return(
        <div className="nav">
        <div className="logo">not just <br />education</div>
        <div className="navbar">
            <ul>
                <li><a href="#">Incubator</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Courses</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
        </div>

        </div>

        
    )
}

export default Navbar