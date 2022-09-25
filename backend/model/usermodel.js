const mongoose = require("mongoose")
const User = new mongoose.Schema({
    Title:{
        type:String,
    },
    Thumbnail:{
        type:String
    },
    cloudinary_url:{
        type:String
    },
    
},{timestamps:true})
module.exports = mongoose.model('User',User);
// title
//thumbnail
//url