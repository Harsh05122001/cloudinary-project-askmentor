var express = require("express");
var cors = require("cors");
var bodyParser = require('body-parser');
var dotenv  =require('dotenv')
var mongoose = require("mongoose")
const app = express();
app.use(cors());
const Routes = require('./routes')
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

dotenv.config();
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
app.get("/",(req,res)=>{
  res.json("server started");
})
app.use("/",Routes);
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("Server successfully connected with MongoDB!");
    
}).catch(err=>{
  console.log(err);
})
app.listen(process.env.PORT || 5000 ,function(){
        console.log("Server started on port");
    })
