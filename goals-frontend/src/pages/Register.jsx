import React from 'react'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { register, reset } from '../features/auth/authSlice';
import Spinner from '../features/Spinner';
import Qoutes from '../features/Qoutes';
const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    userName:'',
    email: '',
    password: '',
    password2:''
 })
  const { firstName, lastName, userName, email, password, password2 } = formData;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, messsage } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isError) {
      toast.error(messsage)
    }
    if (isSuccess || user) {
      navigate('/login')
    }
    dispatch(reset)
  }, [user, isError, isSuccess, messsage, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState)=>({
    ...prevState,[e.target.name]:e.target.value,
  }))
  console.log('changed')
  }
  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        firstName,
        lastName,
        userName,
        email, 
        password,
      }
      dispatch(register(userData))
    }
  }
  if (isLoading) {
    return <Spinner/>
  }
  
  return (
    <div className="griding">
      <div className="tex-center qoutes bg-fanta">
  
        <div className="text-6xl font-bold mx-5"><Qoutes/></div>
      </div>
    <div className='container p-2 mx-auto'>
     
       <div className="flex min-h-full mx-auto  items-center justify-center px-6 sm:px-6 lg:px-8   rounded  ">
        <div className="w-full max-w-md bg-gray-100 border p-12 rounded space-y-8">
          <div>
            <div className="mx-auto  h-10  w-auto logo text-fanta">
              <p className='text-3xl'>Goals</p>
            </div>

            <h2 className="mt-6 text-center text-xl font-bold tracking-tight text-gray-900">
              Create your account here
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{'  '}
              <Link to="/Login" className="font-medium text-fanta hover:text-darkBlueish-100">
                  Already have an account 
              </Link>
            </p>
          </div>
        <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={onSubmit}>
            <input type="hidden" name="remember"  />
            <div className="-space-y-px rounded-md shadow-sm">
            <div>
                <label htmlFor="firstName" className="sr-only">
                  first-name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="firstName"
                  value={firstName}
                  required
                  className=" my-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-fanta focus:outline-none focus:ring-fanta sm:text-sm"
                  placeholder="First name" onChange={onChange}
                />
                </div>
           
            <div>
                <label htmlFor="lastName" className="sr-only">
                  last-name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="lastName"
                  value={lastName}
                  required
                  className=" my-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-fanta focus:outline-none focus:ring-fanta sm:text-sm"
                  placeholder="Last name" onChange={onChange}
                />
                </div>
                <div>
                <label htmlFor="userName" className="sr-only">
                  user-name
                </label>
                <input
                  id="userName"
                  name="userName"
                  type="userName"
                  value={userName}
                  required
                  className=" my-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-fanta focus:outline-none focus:ring-fanta sm:text-sm"
                  placeholder="Username" onChange={onChange}
                />
                </div>
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
                <div>
                <label htmlFor="password2" className="sr-only">
                  Re-Password
                </label>
                <input
                  id="password2"
                  name="password2"
                  type="password"
                  value={password2}
                  autoComplete="current-password"
                  required
                  className="my-3 relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-fanta focus:outline-none focus:ring-fanta sm:text-sm"
                  placeholder="Confirm password" onChange={onChange}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                    type="checkbox"
                    onChange={onChange}
                  className="h-4 w-4 rounded border-gray-300 text-fanta focus:ring-fanta"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-500">
                  Read and consent to our <Link to="#" className="font-medium text-fanta hover:text-fanta">Terms and Conditions</Link>
                </label>
              </div>

              <div className="text-sm">
                <Link to="#" className="font-medium text-fanta hover:text-fanta">
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
    </div>
  )
}

export default Register