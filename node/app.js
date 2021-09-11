const express = require("express");
const mongo = require("mongoose");
const env = require("dotenv");

const userRoute = require("./router")

const app = express();
env.config();

// parsing
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// Cross-Origine-Resource Sharing
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Method','GET,POST,DELETE,PUT,PATCH');
    res.setHeader('Access-Control-Allow-Header','Content-type,Authorization');

    next();
})

// initialise route
app.use(userRoute);


// connect with mongoDB
mongo.connect(process.env.link).then(app.listen(2222,()=>{
    console.log("server running")
})).catch(err=>{console.log(err)})