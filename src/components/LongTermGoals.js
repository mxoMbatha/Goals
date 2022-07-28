import React from 'react'
import Goal from './Goal'


const LongTermGoals = ({ goals, onAchieve, onReminder, onDelete }) =>
{
  const longTerm = goals.filter((goal) => goal.term === 'long-term')
    return (
      <div className='all-goals box'>
        { longTerm.map((goal) =>
          <Goal key={ goal.id } goal={goal} onAchieve={onAchieve} onReminder={onReminder} onDelete={onDelete} />
        ).reverse() }
      </div>
    )
  }
  
  export default LongTermGoals