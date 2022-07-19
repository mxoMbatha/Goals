import  { FaTrashAlt } from 'react-icons/fa'
const Goal = ({ goal }) =>
{
  return (
      <div className='_goal'>
          <h4>{goal.text} <span className='trash-icon'><FaTrashAlt style={{color:'red',cursor:'pointer'}}/></span></h4>
    </div>
  )
}

export default Goal