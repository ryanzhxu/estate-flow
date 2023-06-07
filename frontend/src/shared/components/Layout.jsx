import {Outlet} from "react-router-dom";
import NavBar from "./Nav";
import React from "react";


export default function Layout(){
    return (
        <div className= "App">
            <NavBar />
            <Outlet />
        </div>
    )
}