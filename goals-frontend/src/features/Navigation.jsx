import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FaUser,FaBars,FaTimes, FaSignOutAlt} from 'react-icons/fa';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from './auth/authSlice';
import { useLocation } from 'react-router-dom';

const Navigation = () => {

  // logout state
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth)
  
  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }
  const [hamburgerList,setHamburgerList]=useState(false);
  const openHamburger =() =>{
  setHamburgerList(!hamburgerList);
  }
  return (
    <div className={`${useLocation().pathname==='/register'&& 'hidden' } relative container mx-auto  px-4 py-3 sm:mt-6 transition delay-500 `}>
      <div className="flex items-center justify-between container ">
      <div className=""><h1><Link to='/' className=' hover:text-darkGrayishBlue text-fanta logo font-bold'> Goals</Link></h1></div>
        <div className="hidden md:flex space-x-12 font-bold ">
          <Link to='/dashboard' className='hover:text-darkGrayishBlue text-fanta'>Dashboard</Link>
          <Link to='/about' className='hover:text-darkGrayishBlue text-fanta'>About</Link>
        </div>
        
        <div className='flex'>
          {user ? <><button onClick={onLogout} className="hidden md:block p-1 text-fanta bg-white text-xl baseline px-4 hover:text-darkGrayishBlue font-bold"><FaSignOutAlt/></button></>: <><Link className="hidden md:block p-1 text-fanta bg-white text-xl baseline px-4 hover:text-darkGrayishBlue font-bold" to='/login'><FaUser/></Link></>}
        </div>
         
        <button id='menu-btn' className={`block hamburger md:hidden focus:outline-none ' transition delay-500 easy-out`}
         onClick={ openHamburger }>{hamburgerList? <FaTimes  className='text-red-600 hover:text-darkGrayishBlue'/> : <FaBars className='text-fanta'/>}</button>
        </div>
        <div className="md:hidden">
          <div id="menu" className={`absolute rounded transition-all ease-out delay-500 flex-col bg-fanta border times-center self-end py-8 mt-10 sm:mt-5 space-y-6 font-bold bg-da-100 :w-auto sm:self-center p-3 left-6 right-6 dropshadow-md ${hamburgerList?'flex': 'hidden'}`}>
          <Link to='/dashboard' className='hover:text-darkGrayishBlue text-white text-left  '>Dashboard</Link>
          <Link to='/about' className='hover:text-darkGrayishBlue text-white text-left'>About</Link>
          <Link className="font-bold  text-left text-white" to='/login'>Sign In</Link>  
          </div>
        </div>
    </div>
  )
}

export default Navigation