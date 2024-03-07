import React from "react";
import '../components/courses.css'
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";


const Courses = () => {
    
    return(
    <div>
        
        <div class="nft">
        <div class='main'>
            <img class='tokenImage' src="https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="NFT" />
            <h2>Kibertopiks</h2>
            <p class='description'>Our Kibertopiks will give you nothing, waste your money on us.</p>
            <div class="btn"><a href="#">Read more</a></div>
        </div>
        </div>
        
        
    </div>
    )
}

export default Courses