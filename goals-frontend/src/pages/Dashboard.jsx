import React, { useEffect } from 'react'
import { useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Qoutes from '../features/Qoutes';
const Dashboard = () =>
{
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);

    useEffect(() =>
    {
        if (!user) {
          navigate('/login');
      }
       
    },[user,navigate])
  return (
     <>
     <div className='container p-2 mx-auto'>
      <h1>Welcome  {user.firstName}</h1>
      <Qoutes/>
      </div>
      </>
  )
}

export default Dashboard   