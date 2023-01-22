import React from 'react'
import Qoute from './Qoute';
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';


const Header = ({  qoutes  }) =>
{
    const [qoute, setQoute] = useState("");
   
    useEffect(() =>
    {
     
       (setQoute(qoutes[0]))
        
         
        
    }, [qoutes]);

    return (
      <header className='header'>
            <h1>{useLocation().pathname==='/about'? 'About': 'Goals' } </h1>
            {useLocation().pathname!=='/about' && <Qoute  qoute={ qoute } /> }
            
         
      </header>
  )
}


export default Header