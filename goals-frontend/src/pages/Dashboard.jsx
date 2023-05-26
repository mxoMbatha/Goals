import React, { useEffect ,useState} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Qoutes from '../features/Qoutes';
import { FaBars,FaTimes } from 'react-icons/fa';
import SetGoalForm from '../features/SetGoalForm';
import { getGoals,reset } from '../features/goal/goalSlice';
const Dashboard = () =>
{
  const dispatch=useDispatch
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const {goals,isLoading,isError,message}=useSelector((state)=>state.goals)
  const [displaySet,setDisplaySet]=useState(false)

  useEffect(() =>
  {
    if (isError) (
      console.log(message)
    )
    if (!user) {
    navigate('/login');
    }
    return () =>
    {
       dispatch(reset())
     }  
  }, [navigate, user,isError,message,dispatch]);  

  const onDisplaySet = () => { setDisplaySet(!displaySet); }
  return (
     <>
      <div className='container p-2 mx-auto'>
        <div className="px-6 py-2 text-sm "><Qoutes /></div>
      <h1 className='md:text-4xl text-2xl text-gray-200 text-left pl-5  font-bold'>Dashboard</h1>
        
        <div className="sm:container">
          <div className="shadow py-2 px-3 mx-6 md:mt-1 mt-2">
          <div className="flex justify-between pt-6 px-8">
            <div className='pt-2'><FaBars /></div>
              <button type="submit" className={`${displaySet ? 'text-red-600 bg-red-25':'text-fanta'} px-2 font-bold shadow  right py-1 hover:bg-gray-300 hover:text-white transition delay-100 ease-in-out` } onClick={onDisplaySet
              }>
              { displaySet ? <FaTimes/> : 'set goal' }</button>
            </div>
            <div className="sm:container rounder p-2">
         { displaySet && <SetGoalForm onDisplaySet={onDisplaySet}/>}
        </div>
          </div>
        </div>
        
      </div>
      

      </>
  )
}

export default Dashboard  