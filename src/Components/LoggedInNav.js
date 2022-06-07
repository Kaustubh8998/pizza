import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";

export default function LoggedInNav(props) {
    let [count,setCount]=useState(0);
    useEffect(()=>{
        if(localStorage.getItem('mycart') !== null){
            let arr = JSON.parse(localStorage.getItem('mycart'))
            setCount(arr.length)
        }
    },[])
  return (
    <>
    <div className="d-flex">
            <Link className="nav-link text-secondary fs-4" to="/menu">Menu</Link>
            <Link className="nav-link text-secondary fs-4" to="/cart">Cart ({count})</Link>
            <Link className="nav-link text-secondary fs-4" to="/">Log Out</Link>
     </div>
    </>
  )
}
