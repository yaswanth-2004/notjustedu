import Course from "../model/Courses.js";
import express from "express";
import  Router  from "express";

const router = express.Router()


router.get('/',async(req,res)=>{
    
    try{
        const response = await Course.find({})
        res.json(response)
        console.log(response);
    }
    catch(e){
        console.log(e);
    }
})

export {router as CourseRouter}
