import React from 'react'
import Goal from './Goal'


const Goals = ({ goals ,onAchieve,onReminder,onDelete }) =>
{

    return (
      <div className='all-goals box'>
        { goals.map((goal) =>
          <Goal key={ goal.id } goal={goal} onAchieve={onAchieve} onReminder={onReminder} onDelete={onDelete} />
        ) }
      </div>
    )
  }
  
  export default Goals