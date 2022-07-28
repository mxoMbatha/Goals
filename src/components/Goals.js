import React from 'react'
import Goal from './Goal'


const Goals = ({ goals, onAchieve, onReminder, onDelete }) =>
//short-term goals

{
  
    return (
      <div className='all-goals box'>
        { goals.filter((goal)=>goal.term!='long-term').map((goal) =>
          <Goal key={ goal.id } goal={goal} onAchieve={onAchieve} onReminder={onReminder} onDelete={onDelete} />
        ).reverse() }
      </div>
    )
  }
  
  export default Goals