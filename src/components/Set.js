import React from 'react'
import Button from './Button'
import SetGoal from './SetGoal'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
const Set = ({ onSet,dropDown,onDropDown }) =>
{
  const [displaySet, setDisplaySet] = useState(false);

  
  return (
    <div className='set-goals'>
      <div className="inline-section">
         <div className="dropdown">       
        <span className="icon"><FaBars onClick={ onDropDown } />
          </span>
          <div id="myDropdown" className={ `dropdown-content ${dropDown ? 'show' : ''}` }>
            <a href="#about">Long-term goals</a>
          <a href="#achieved">Achieved goals</a>
            <a href="#about">History</a>
            
        </div>
       </div>
        <Button color={ `${displaySet ? 'rgb(255, 72, 0)' : ''}` } text={ `${displaySet ? 'close' : 'set a goal'}` } onClick={ () => { setDisplaySet(!displaySet); } } />
      </div>
      { displaySet && <SetGoal onSet={ onSet } />
      }    
    </div>
  )
}


export default Set