import cors from 'cors'
import express, { response } from 'express'
import mongoose from 'mongoose'
import { CourseRouter } from './router/course.js'

const app = express()

app.use(express.json())
app.use(cors())
app.use("/course",CourseRouter)
console.log(app.use("/course",CourseRouter))
mongoose.connect("mongodb://localhost:27017/courses")
mongoose.connection.once("open",()=>{console.log("connected to database...")})



app.listen(3001,()=>{console.log("listening...");})

