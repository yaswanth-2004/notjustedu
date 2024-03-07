import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
    desc:{
        type:String
    },
    img:{
        type:String
    },
    title:{
        type:String
    }
})

export default mongoose.model("Course",CourseSchema)