import React,{useState,useEffect} from "react";
import logo from "./Images/logo.png";
import LoggedInNav from "./LoggedInNav";
import LoggedOutNav from "./LoggedOutNav";

export default function Navbar() {
  return (
    <>
      <nav className="navbar bg-light">
        <div className="container flex">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="" width="150" height="130" />
          </a>
          <LoggedOutNav/>
          <LoggedInNav/>
        </div>
      </nav>
    </>
  );
}
