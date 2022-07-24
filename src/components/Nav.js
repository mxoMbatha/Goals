import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Nav = () =>
{
  const [navDropDown, setNavDropDown] = useState(false);
  
  
  return (
          <div className="nav-list">  
              <div className="head-logo ">
            <h1><Link  to="/">G</Link></h1>
      </div>
      <div className="right-items">
        <span className="dots" onPointerOver={()=>{setNavDropDown(!navDropDown);} }><p>...</p></span>
        <ul className={`nav-dropdown ${ navDropDown?'show-nav-list':''}`}>
        <li><Link to="/about">About</Link></li>
        <li><Link  to="/">sign up</Link></li>
      </ul>
      </div>
       
                </div>  
  )
}

export default Nav