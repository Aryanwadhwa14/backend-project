import express from "express" 
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express() //express docs code 

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials :  true
}))  //used in configuration of cors in middlewares 

app.use(express.json({limit : "16kb"})) //configuration 
app.use(express.urlencoded({extended : true, limit : "16kb"})) //making the codebases better 
app.use(express.static("public")) //used for adding public data, example : fav-icons etc 
app.use(cookieParser()) //cookies handler 

export{app}