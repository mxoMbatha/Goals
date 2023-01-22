import {useState} from 'react'
import { FaSignInAlt, FaUserAlt, FaUserAltSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import React from 'react'
const Login = () => {
    
    const [formData, setFormData] = useState({
        
          email: '',
          password: '',
         
    })
    const { email, password } = formData;
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
      <div className="authentication Login">
            <div className="topAuth">
                 <h1><FaUserAlt /></h1>
                <p>Login</p>
            </div>
            <form method="post" className="addForm box auth-form" onSubmit={onSubmit}>
                
                <div className="formControl auth-input">
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
  )
}

export default Login