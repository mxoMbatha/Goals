import React from 'react'

const Footer = () =>
{
    let dates=new Date()
    let thisYear = `${dates.getFullYear()}`;
   
    return (
        <div className='footer'>
            <footer>
                <p>All rights reserved   &copy; { thisYear }  <a href="\">Mxolisi Mbatha</a></p>
            </footer>
    </div>
  )
}

export default Footer