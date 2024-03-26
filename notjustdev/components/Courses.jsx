import React from "react";
import '../components/Courses.css'
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";


const Courses = (props) => {

    const [courseId,setcourseId] = useState([])
    const navigate = useNavigate()

    const CourseId = (value) => {
        setcourseId(value)
        navigate('/fullcourse',{state: {month: value.month,title:value.title,desc:value.desc}})
        console.log(value);
      }
 

    return(
    <div>
        
        <div class="nft">
        <div class='main'>
            <img class='tokenImage' src="https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="NFT" />
            <h2>{props.title}{courseId}</h2>
            <p class='description'>{props.desc}</p>
            <p>{props.month}</p>
            <div class="btn" key={props.key} onClick={()=> CourseId(props)}> <a > Read more</a></div>
        </div>
        </div>
        
        
    </div>
    )
}

export default Courses