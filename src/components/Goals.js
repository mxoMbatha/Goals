import React from 'react'
import Goal from './Goal'
const Goals = ({ goals }) =>
{
    return (
      <div className='all-goals'>
        { goals.map((goal) =>
          <Goal key={ goal.id } goal={goal} />
          ) }
      </div>
    )
  }
  
  export default Goals