// cloudinary video uploder
// url ,title,thumbnail
const User = require('../model/usermodel');
const cloudinary = require('cloudinary').v2
exports.Uploadvideo = async function(req,res){
    const file = req.file
        try{
        const result  =await cloudinary.uploader.upload(file.path, {resource_type : "video"});
        res.status(200).json(result);
    }catch(err){
        res.status(400).json(err);
    }

}
exports.Uploadimage= async function(req,res){
    const file = req.file
        try{
        const result  =await cloudinary.uploader.upload(file.path, {resource_type : "image"});
        res.status(200).json(result);
    }catch(err){
        res.status(400).json(err);
    }

}
exports.Createfile = async function(req,res){
    const data = req.body
    console.log(data);
    try{
        const user  = new User({
            Title :data.Title,
            Thumbnail:data.Imageurl,
            cloudinary_url:data.Videourl
        });
        user.save(function(err,result){
            if(err){
                res.status(400).json(err);
            }
            res.status(200).json(result);
        })
    }catch(err){
        res.status(200).json(err);
    }
}
exports.getall = async function(req,res){
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }

}
