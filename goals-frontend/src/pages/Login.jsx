import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
const Login = () => {
 const [formData,setFormData]=useState({
  email:'',
  password:'',
 })
 const {email,password}=formData;
 const onChange=(e)=>{
  setFormData((prevState)=>({
    ...prevState,[e.target.name]:e.target.value
  }))
  console.log('changed')
 }
 const onSubmit=(e)=>{
  e.preventDefault();
  console.log('submitted')
 }
  return (
    <div className='container p-2 mx-auto'>
      <h1>Login</h1>
 
      <div className="Login">
            <div className="topAuth">
                 <h1></h1>
                <p>Login</p>
            </div>
            <form method="post" className="" onSubmit={onSubmit}>
                
                <div className="">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" value={email} placeholder="Enter email" onChange={onChange}/>
                </div>
                <div className="formControl auth-input">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" value={password} placeholder="Enter password" onChange={onChange}/>
                </div>
                
                 <input type="submit" value="Login" className='btn auth-btn auth-input' />
                <Link to="/Register" className='aut-link'>forgot password?</Link>
                <Link to="/Register" className='aut-link'>Don't have an account? </Link>
            </form>
    </div>
    </div>
  )
}

export default Login