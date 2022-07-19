import React from 'react'

const Qoute = ({ qoute }) => {
  return (
    <p id='qouteline'>`{ qoute.text }` <br/> <span className='qoute-author'>{ qoute.author }</span></p>  
  )
}


export default Qoute