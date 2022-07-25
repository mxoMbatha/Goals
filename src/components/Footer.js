import React from 'react'

const Footer = () =>
{
    let dates=new Date()
    let thisYear = `${dates.getFullYear()}`;
   
    return (
        <div className='footer'>
            <footer>
                <p> &copy; { thisYear } <a href="\">Goals</a>. All rights reserved. </p>
                <p>  By <a href="\">Mxolisi Mbatha</a></p>
            </footer>
    </div>
  )
}

export default Footer