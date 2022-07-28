import Goal from "./Goal";
import React from 'react'

const AchievedGoals = ({goals}) => {
  return (
    <div className="all-goals box">
      {
        goals.filter((goal) => goal.achieved==='achieved').map((goal) =>
        <Goal key={goal.id} goal={goal}/>).reverse()
      }

    </div>
  )
}

export default AchievedGoals