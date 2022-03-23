import React from "react";
import {
    Link,
    Outlet
} from 'react-router-dom';

function Topics(){
    return(
      <div className="Topics">
        <ul>
          <li>
            <Link to="/topics/kuliner">Kuliner</Link>
          </li>
          <li>
            <Link to="/topics/review-hotel">Review Hotel</Link>
          </li>
          <li>
            <Link to="/topics/travelling">Travelling</Link>
          </li>
        </ul>

        <Outlet/>
      </div>
    );
}

export default Topics;