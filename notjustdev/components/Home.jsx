import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import Courses from "./Courses.jsx";
import Blog from "./Blog";
import axios from "axios"
import { useEffect } from "react";




const Home = () =>{
  const [course, setCourse] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/course');
        setCourse(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

    return(
      <div className='nav'>
      <Navbar/>
      <div className='text'>
      <h2 >You are notJust a Developer. You <br /> are more than that 🚀</h2> <br />
      <h3>Your journey to becoming a full-stack technical lead <br />starts today.  Learn faster by building the apps you ❤️
      </h3>
      </div>
      <Blog/>
      <h1 className="title">Courses</h1>
      <h1 className="title">Free Courses</h1>
      <div className="container">
        <Courses/>
        <Courses/>
        <Courses/>
      </div>
      <h1 className="title">Paid Courses</h1>
      <div className="container">
        {course.map(val=>(
          <Courses title={val.title} desc={val.desc} month={val.month}/>
        ))}
        
      
      </div>


      
    </div>
    )
}

export default Home