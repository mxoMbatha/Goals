import './App.css';
import Header from './components/Header';
import Set from './components/Set';
import Goals from './components/Goals';
import { useState } from 'react';

function App()
{
   const [goals,setGoals]=useState([
    {
    id: 1,
    text: 'finish my first react project',
    reminder: true,
    },
    {
    id: 2,
    text: 'Build a django voting app',
    reminder: true,
    
    },
    {
    id: 3,
    text: 'Biuld and deploy my portfolio website with django and react',
    reminder: false,
    }
    
   ]
   )
   return (
    <div className="container">
       <Header />
         <Goals goals={ goals } />
         <Set /> 
    </div>
  );
}

export default App;
