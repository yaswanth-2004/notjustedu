import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import './Fullcourse.css'

const Fullcourse = () => {
    const location = useLocation()
    console.log(location.state);
    return(
        <div>
        <Navbar/>
        <h1 className="title">{location.state.title}</h1>
        <div className="row">
            <div className="column"><p className="desc">{location.state.desc}</p></div>
            <div className="column1"><h1>It is a video section</h1></div>
        </div>
        
        </div>
    )
}

export default Fullcourse