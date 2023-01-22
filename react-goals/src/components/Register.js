import { useState, useEffect } from "react";
import { FaUser } from 'react-icons/fa';
import { Link } from "react-router-dom";
import React from 'react';
const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        userName:'',
          email: '',
          password: '',
          password2: '',
          
    })
    const { firstName, lastName, name, email, password, password2 } = formData;
    const onChange = (e) =>
    {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
        console.log('changed')
    }
    const onSubmit = (e) =>
    {
        e.preventDefault()
        console.log('submitted')
    }
    return ( 
      <div className="authentication Register ">
            <div className="topAuth" >
                <h1><FaUser /></h1>
                <p>Register</p>
            </div>
            <form method="post" className="addForm box auth-form" onSubmit={onSubmit}>
                <div className="formControl auth-input">
                    <label htmlFor="firstName">Firstname</label>
                    <input type="text" name="firstName" id="firstName" value={firstName} placeholder="Enter name" onChange={onChange}/>
                </div>
                <div className="formControl auth-input">
                    <label htmlFor="lastName">Lastname</label>
                    <input type="text" name="lastName" id="lastName" value={lastName} placeholder="Enter last name" onChange={onChange}/>
                </div>
                <div className="auth-input formControl">
                    <label htmlFor="name">Username</label>
                    <input type="text" name="name" id="name" value={name} placeholder="Enter username" onChange={onChange}/>
                </div>
                <div className="formControl auth-input">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" value={email} placeholder="Enter email" onChange={onChange}/>
                </div>
                <div className="formControl auth-input">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" value={password} placeholder="Enter password" onChange={onChange}/>
                </div>
                <div className="formControl auth-input">
                    <label htmlFor="password2">Password</label>
                    <input type="password" name="password2" id="password2" value={password2} placeholder="Confirm password" onChange={onChange}/>
                </div>
                 <input type="submit" value="Register" className='btn auth-btn auth-input' />
                <Link to="/login" className='aut-link'>Already have an account? </Link>
            </form>
    </div>
  )
}

export default Register