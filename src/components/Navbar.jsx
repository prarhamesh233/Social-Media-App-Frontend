import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div className="navbar">
        <nav>
        <h1>App Name</h1> 
         <Link to="/">  Home</Link> 
          <Link to="/profile"> Profile</Link>
          <Link to="/explore">Explore</Link> 

          <Link to="">Logout</Link>
          
      </nav>
      </div>
    );
}
export default Navbar;