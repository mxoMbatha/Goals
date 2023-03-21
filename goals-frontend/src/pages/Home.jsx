import React from 'react';
import Qoutes from '../features/Qoutes';
import Navigation from '../features/Navigation';
const Home = () => {
  return (
    <>
    <Navigation/>
    <div className='container p-2 mx-auto'>
      <h1>home</h1>
      <Qoutes/>
      </div>
      </>
  )
}

export default Home