import React from 'react'
import { Link } from 'react-router-dom';
import { FaUser,FaBars,FaTimes} from 'react-icons/fa';
import { useState } from 'react';

const Navigation = () => {
  const [hamburgerList,setHamburgerList]=useState(false);
  const openHamburger =() =>{
  setHamburgerList(!hamburgerList);
  }
  return (
    <div className='relative container mx-auto p-3 transition delay-500 '>
      <div className="flex items-center justify-between">
      <div className=""><h1><Link to='./' className=' hover:text-darkGrayishBlue text-fanta logo font-bold'> Goals</Link></h1></div>
        <div className="hidden md:flex space-x-12 font-bold ">
          <Link to='./Comminity' className='hover:text-darkGrayishBlue text-fanta'>Community</Link>
          <Link to='./About' className='hover:text-darkGrayishBlue text-fanta'>About</Link>
        </div> 
        <Link className="hidden md:block p-1 text-fanta bg-white text-xl baseline px-4 hover:text-darkGrayishBlue font-bold" to='./Login'><FaUser/></Link>
        <button id='menu-btn' className={`block hamburger md:hidden focus:outline-none ' transition delay-500 easy-out`}
         onClick={ openHamburger }>{hamburgerList? <FaTimes  className='text-red-600 hover:text-darkGrayishBlue'/> : <FaBars className='text-fanta'/>}</button>
        </div>
        <div className="md:hidden">
          <div id="menu" className={`absolute rounded transition-all ease-out delay-500 flex-col bg-fanta border times-center self-end py-8 mt-10 sm:mt-5 space-y-6 font-bold bg-da-100 :w-auto sm:self-center left-6 right-6 dropshadow-md ${hamburgerList?'flex': 'hidden'}`}>
          <Link to='./Comminity' className='hover:text-darkGrayishBlue text-white'>Community</Link>
          <Link to='./About' className='hover:text-darkGrayishBlue text-white'>About</Link>
          <Link className="font-bold text-white" to='./Login'>Sign In</Link>  
          </div>
        </div>
    </div>
  )
}

export default Navigation