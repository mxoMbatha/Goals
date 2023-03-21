import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Qoutes from '../features/Qoutes';
import Navigation from '../features/Navigation';
const Dashbord = () =>
{
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth);

    useEffect(() =>
    {
        if (!user) {
          navigate('/login');
       } 
    },[user,navigate])
  return (
     <>
    <Navigation/>
     <div className='container p-2 mx-auto'>
      <h1>Welcome  { user.firstName}</h1>
      <Qoutes/>
      </div>
      </>
  )
}

export default Dashbord