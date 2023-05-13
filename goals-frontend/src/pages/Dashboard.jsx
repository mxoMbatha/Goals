import React, { useEffect } from 'react'
import { useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Qoutes from '../features/Qoutes';
const Dashboard = () =>
{
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
    navigate('/login');
    }
       
  }, [navigate,user]);
  return (
     <>
      <div className='container p-2 mx-auto'>
        
      <h1 className='md:text-4xl text-2xl text-center p-4 font-bold'>Welcome to your Dashboard {user && user.firstName}</h1>
      <div className="px-6 py-2 text-sm"><Qoutes/></div>
      </div>
      </>
  )
}

export default Dashboard   