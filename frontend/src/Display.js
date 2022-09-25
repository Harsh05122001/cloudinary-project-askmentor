import axios from "axios";
import {useState,useEffect} from "react";
import Header from "./Header";
export default function Display(){
    const [data,setdata] = useState();
    useEffect(() => {
      async function getall(){
        const result = await axios.get('https://cloudinary-project-askmentor.herokuapp.com/api/user/all');
        setdata(result.data);
      }
      getall();
    }, []);
    return (
        <div>
            <Header/>
            {data?.map((result) =>(
                <div className="displaybox" >
                    <a href= {result.cloudinary_url} target = "_blank"><p className="txt">{result.Title}</p></a>
                    <a href= {result.cloudinary_url} target = "_blank"><img className="image" src ={result.Thumbnail} width={"60%"} height={200} /></a>
                    <p className="dis">Click on Image or Title to Play</p>
                    
                </div>

            ))}
        </div>
        
    )
    
    
   
    
}