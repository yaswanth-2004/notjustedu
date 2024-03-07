import Course from "../model/courses.js";
import express from "express";
import { Router } from "express";

const router = express.Router()


router.get('/',async(req,res)=>{
    
    try{
        const response = await Course.find({})
        res.json(response)
        console.log(response);
        console.log(hi);
    }
    catch(e){
        console.log(e);
    }
})

export {router as CourseRouter}
