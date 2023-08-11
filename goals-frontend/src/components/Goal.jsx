import React from 'react'

const Goal = (goal) => {
  return (
      <div>
          <div>{ new Date(goal.createdAt).toLocaleString('en-ZA') }</div>
          <h2>{ goal.text }</h2>
          <button className='close'>x</button>
      </div>
  )
}

export default Goal