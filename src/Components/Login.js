import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate();

    const loggedin = () =>{
        navigate("/user")
    }
  return (
    <>
    <div className='container pt-4'>
        <h2 className='fs-3'>Login</h2>
        <form onSubmit={loggedin}>
            <input type="email" name="" placeholder='Enter Your e-mail ID' className='mt-3 py-2 container-lg'/>
            <input type="password" name="" placeholder='Enter Your password' className='mt-3 py-2 container-lg'/>
            <button type='submit' className='mt-4 btn border bg-dark text-white'>Login</button>
        </form>
    </div>
    </>
  )
}
