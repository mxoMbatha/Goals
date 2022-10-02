import {  FaTrashAlt } from 'react-icons/fa'
const Goal = ({ goal,onAchieve,onReminder,onDelete }) =>
{
 
 return (
    <div
      className={ `_goal ${goal.achieved ? 'achieved' : ''} ` }
      style={ goal.reminder ? { borderLeft: '4px solid rgb(255, 72, 0)' } : {} }
      onDoubleClick={ () => { onReminder(goal._id) } }
    >
      <p contentEditable={false}><span>
        <input type="checkbox" name="achieved" id="achieved" onChange={ () =>
      {
         onAchieve(goal._id)
         alert(' Well done! you have successfully achieved your goal')
        } } />{ goal.text }
      </span>
        <span className='icon'>
          <FaTrashAlt onClick={ () => { onDelete(goal._id) } } />
        </span>
      </p>
     <p className='date-time'>
       <span> { goal.date }</span>
       <span className='time'>{ goal.time }{
       `${parseInt((goal.time).substring(0, 2)) >= 12 ? ' pm' : ' am'}`
     }</span></p>
      { <p className='achieved-text' style={ goal.achieved ? {border: '1px solid'} : { display: 'none' } }>{ goal.achieved }</p>
      }
    </div>
  )
}


export default Goal