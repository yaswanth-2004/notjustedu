import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
    desc:{
        type:String
    },
    title:{
        type:String
    },
    month:{
        type:String
    }
})

export default mongoose.model("Course",CourseSchema)