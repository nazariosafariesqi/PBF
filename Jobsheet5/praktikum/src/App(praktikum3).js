import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Home from "./Home";
import Topics from "./Topics";
import Kuliner from "./Kuliner";
import ReviewHotel from "./ReviewHotel";
import Travelling from "./Travelling";

export default function NestingExample(){
    return(
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
        <hr />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/topics" element={<Topics/>}>
            <Route path="kuliner" element={<Kuliner/>}/>
            <Route path="review-hotel" element={<ReviewHotel/>}/>
            <Route path="travelling" element={<Travelling/>}/>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}