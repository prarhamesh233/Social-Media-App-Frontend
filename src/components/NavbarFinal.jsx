import React from "react";
import {Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Explore from "./Explore";
import Navbar from "./Navbar";

function NavbarFinal(){
    return (
        <div>
         <Navbar />
        <Routes >
        <Route exact path="/" Component={Home} />
        <Route exact path="/profile" Component={Profile} />
        <Route exact path="/explore" Component={Explore} />
        </Routes>
        </div>
    )
}
export default NavbarFinal;