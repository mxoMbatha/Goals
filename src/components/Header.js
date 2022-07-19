import React from 'react'
import PropTypes from 'prop-types'
import Qoute from './Qoute';
import { useState,useEffect } from "react";

const Header = ({ title }) =>
{
    const [qoutes, setQoutes] = useState([
        {
            id: 1,
            text: 'achieving in silence',
            author: 'Mxolisi Mbatha',
        },
        {
            id: 2,
            text: 'Procastnation is the enemy, stay motivated',
            author: 'Mxolisi Mbatha',
    
        },
        {
            id: 3,
            text: 'A goal with no plan is a dream',
            author: 'Unknown',
        }
    ]);
    const [qoute, setQoute] = useState("");
    let qouteIndex = 0;
    useEffect(() =>
    {
        const interval = setInterval(() =>
        {
            setQoute(qoutes[qouteIndex]);
            if (qouteIndex < qoutes.length - 1) {
                qouteIndex++
            }
            else {
                qouteIndex=0
            }
            
        }, 10000);
        return () =>
        {
            clearInterval(interval);
        };
    }, []);

    return (
      <header className='header'>
            <h1> { title } </h1>
            <Qoute key={ qoute.id} qoute={ qoute }/>
            
         
      </header>
  )
}
Header.defaultProps = {
    title: 'Goals',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header