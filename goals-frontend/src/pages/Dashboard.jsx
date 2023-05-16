import React, { useEffect ,useState} from 'react'
import { useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Qoutes from '../features/Qoutes';
import { FaBars } from 'react-icons/fa';
import SetGoalForm from '../features/SetGoalForm';
const Dashboard = () =>
{
    const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [displaySet,setDisplaySet]=useState(false)

  useEffect(() => {
    if (!user) {
    navigate('/login');
    }
       
  }, [navigate, user]);  

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
            <button type="submit" className='px-2 font-bold shadow text-fanta right py-1 hover:bg-gray-300 hover:text-white hover:px-3 transition delay-100 ease-in-out'>set goal</button>
            </div>
            <div className="sm:container rounder p-2">
          <SetGoalForm/>
        </div>
          </div>
        </div>
        
      </div>
      

      </>
  )
}

export default Dashboard  