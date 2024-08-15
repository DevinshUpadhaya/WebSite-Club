const port = 4001;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());


//database connection with mongodb
mongoose.connect("mongodb+srv://ibmdemo:qwertyuiop@cluster0.gjkozsv.mongodb.net/ibmdemo");

//API end point

app.get("/",(req,res)=>{
    res.send("Express App is Running")
}

)

app.listen(port,(error)=>{
    if (!error){
        console.log("Server running on Port" + port)
    }
    else
    {
        console.log("Error :"+error)
    }
})