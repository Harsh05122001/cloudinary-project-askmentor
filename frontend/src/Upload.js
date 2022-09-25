import "./styles.css";
import {useState} from "react";
import { Navigate } from "react-router-dom";
import Header from "./Header";
const  axios  =require("axios");

export default function Upload() {
  const[image,setimage] = useState(true);
  const [video,setvideo] = useState(true);
  const [toggle,setoggle] = useState(false);
  const [error,seterror] = useState();
  const [Title,setTitle] = useState();
  const [Thumbnail,setThumbnail] = useState();
  const [Imageurl,setimageurl] = useState();
  const [Videourl,setvideourl] = useState();
  const [path,setpath] = useState();
  function handleimage(e){
      setThumbnail(e.target.files[0]);
      setimage(false);
    }
  function handlevideo(e){
    setpath(e.target.files[0]);
    setvideo(false);
  }
  function handlesubmit(){

    if(Title && Imageurl && Videourl){
      
      axios.post("https://cloudinary-project-askmentor.herokuapp.com/api/user/upload",{Title,Imageurl,Videourl}).then(res=>{
        alert("Uploaded Successfully")
        setoggle(true);
        window.location.reload();
        console.log(res);
      }).catch(err=>{
        alert(err);
      })
    }else{
      alert("Please Enter All Details");
    }
  }
  function Uploadimage(){
    setimage(true);
    alert("Please Wait Until successfull Popup arrives....");
    const formdata = new FormData();
    formdata.append('image',Thumbnail);
    axios.post("https://cloudinary-project-askmentor.herokuapp.com/api/user/uploadimage",formdata).then(res =>{
      setimageurl(res.data.secure_url);
      setimage(true);
      alert("Image Uploaded");
    }).catch(err =>{
      setimage(false);
      alert("File Type Not supported");
      
      
    })
  }
  function Uploadvideo(){
    setvideo(true);
    alert("Please Wait Until successfull Popup arrives....");
    const formdata = new FormData();
    formdata.append('video',path);
    axios.post("https://cloudinary-project-askmentor.herokuapp.com/api/user/uploadvideo",formdata).then(res =>{
      setvideourl(res.data.secure_url);
      setvideo(true);

      alert("Video Uploaded");
    }).catch(err =>{
      setimage(false);
      alert("File Type Not supported");
      
      
    })
  }
 
  return (
    <>
      <Header/>
    
    <div className="App">
    
      <h1>Upload Your Video</h1>
      <input  onChange={(e)=>setTitle(e.target.value)} value = {Title} placeholder = "Title" name= "title" className = "text"/>
      <div  className="box">
        <input  onChange={(e)=>handleimage(e) }  type = "file" accept  ="image/*" className = "text"/>
        <button disabled = {image} onClick = {Uploadimage}>Upload Image</button>
      </div>
      <div className="box">
        <input  onChange={(e)=>handlevideo(e)} type = "file" accept  ="video/*" className = "text" />
        <button disabled = {video} onClick = {Uploadvideo}>Upload Video</button>
      </div>
      <button disabled = {toggle} onClick={handlesubmit}>Submit</button>
      {error}
    </div>
    </>
  );
}
