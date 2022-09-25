import "./styles.css";
import {useState} from "react";
import Upload from "./Upload";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import Display from "./Display";
export default function App() {
  return (
        <Router>
            <Routes>
                <Route path = "/" element= {<Upload/>}></Route>
            </Routes>
            <Routes>
                <Route path = "/display" element= {<Display/>}></Route>
            </Routes>
        </Router>
    );
  
}
