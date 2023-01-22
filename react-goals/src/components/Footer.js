import React from 'react'
import { Link } from 'react-router-dom';
const Footer = () =>
{
    let dates=new Date()
    let thisYear = `${dates.getFullYear()}`;
   
    return (
        <div className='footer'>
            <footer>
                <p> &copy; { thisYear } <Link to="/">Goals</Link>. All rights reserved. </p>
                <p>  By <Link to="/">Mxolisi Mbatha</Link></p>
            </footer>
    </div>
  )
}

export default Footer