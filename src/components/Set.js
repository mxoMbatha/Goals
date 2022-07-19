import React from 'react'
import Button from './Button'

const Set = () =>
{
  const onClick = () =>
  {
    console.log('Im clicked')
      }  
  return (
    <div className='set-goals'>
     <Button color='' text='new goal' onClick={onClick}/>      
    </div>
  )
}


export default Set