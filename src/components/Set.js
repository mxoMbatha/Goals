import React from 'react'
import Button from './Button'
import SetGoal from './SetGoal'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Set = ({ onSet,dropDown,onDropDown,displaySet,onDisplaySet }) =>
{
  
  return (
    <div className='set-goals'>
      <div className="inline-section">
         <div className="dropdown">       
        <span className="icon"><FaBars onClick={ onDropDown } />
          </span>
          <div id="myDropdown" className={ `dropdown-content ${dropDown ? 'show' : ''}` }>
            <Link to="/longtermgoals">Long-term </Link>
          <Link to="/achievedgoals">Achieved </Link>
            <a href="#about">History</a>
            
        </div>
       </div>
        <Button color={ `${displaySet ? 'rgb(255, 72, 0)' : ''}` } text={ `${displaySet ? 'close' : 'set a goal'}` } onClick={ onDisplaySet }  />
      </div>
      { displaySet && <SetGoal onSet={ onSet } onDisplaySet={ onDisplaySet } displaySet={ displaySet } />
      }    
    </div>
  )
}


export default Set