import React from 'react'
import { Link } from "react-router-dom";

export default function LoggedOutNav() {
  return (
    <>
    <div className="d-flex">
        <Link className="nav-link text-secondary fs-4" to="/signup">Sign Up</Link>
        <Link className="nav-link text-secondary fs-4" to="/login">Log In</Link>
    </div>
    </>
  )
}
