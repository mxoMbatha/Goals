import React from 'react'
import { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { login, reset } from '../features/auth/authSlice';
import Spinner from '../features/Spinner';
const Login = () => {
 const [formData,setFormData]=useState({
  email:'',
  password:'',
 })
  const { email, password } = formData;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    if (isSuccess || user) {
      navigate('/dashboard')
    }
    dispatch(reset)
  }, [user, isError, isSuccess, message, navigate, dispatch])

 const onChange=(e)=>{
  setFormData((prevState)=>({
    ...prevState,[e.target.name]:e.target.value,
  }))
  console.log('changed')
 }
  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    }
    dispatch(login(userData))
    
  }
  if (isLoading) {
      return <Spinner/> 
    }
  return (
    <div className='container p-2 mx-auto'>
       <div className="flex min-h-full mx-auto  items-center justify-center py-12 px-6 sm:px-6 lg:px-8   rounded mt-7 ">
        <div className="w-full max-w-md bg-stone-50 border shadow p-12 rounded space-y-8">
          <div>
            <div className="mx-auto  h-10  w-auto logo text-fanta">
              <p className='text-3xl'>Goals</p>
            </div>

            <h2 className="mt-6 text-center text-xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{'  '}
              <Link to="/register" className="font-medium text-fanta hover:text-darkBlueish-100">
                  Create account here
              </Link>
            </p>
          </div>
        <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={onSubmit}>
            <input type="hidden" name="remember"  />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  value={email}
                
                  required
                  className=" my-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-fanta focus:outline-none focus:ring-fanta sm:text-sm"
                  placeholder="Email address" onChange={onChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-fanta focus:outline-none focus:ring-fanta sm:text-sm"
                  placeholder="Password" onChange={onChange}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-fanta focus:ring-fanta"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link to="/resetpassword" className="font-medium text-fanta hover:text-fanta">
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-fanta py-2 px-4 text-sm font-medium text-white hover:bg-fanta-700 focus:outline-none focus:ring-2 focus:ring-fanta focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  {/* <LockClosedIcon className="h-5 w-5 text-fanta group-hover:text-fanta-400" aria-hidden="true" /> */}
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login