import './App.css';
import Header from './components/Header';
import Set from './components/Set';
import Goals from './components/Goals';
import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './components/About';
import { useState,useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { getQuote } from 'inspirational-quotes';

function App()
{
   const [goals,setGoals]=useState([])
   
  const [qoutes, setQoutes] = useState([
        getQuote()
  ]);
  const [dropDown, setDropDown] = useState(false);
  useEffect(() =>
  {
    const getGoals = async () =>
    {
      const fetchedGoals = await fetchGoals()
      setGoals(fetchedGoals)
    }
    getGoals();
  }, []);
  
  // fetch all  goals
  const fetchGoals = async () =>
    {
      const res = await fetch('http://localhost:5000/goals');
      const data = await res.json()
      return data
    }
  // fetch each goal
  const fetchEachGoal=async(id)=>{
    const res = await fetch(`http://localhost:5000/goals/${id}`);
    const data = await res.json()
    return data
  }
  
   
  //dropDown
  const onListToggle = () =>
  {
    setDropDown(!dropDown);
  }
  // set goal
  const setNewGoal = async(goal) =>
  {
     
   
    const res = await fetch('http://localhost:5000/goals', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body:JSON.stringify(goal)
    })
    const data = await res.json()
    setGoals([...goals, data]);
    console.log(goal)
  }
  //set reminder
  const toggleReminder = async(id) =>
  {
    const goalToToggle=await fetchEachGoal(id);
    const updatedGoal = { ...goalToToggle, reminder: !goalToToggle.reminder }
   
    const res = await fetch(`http://localhost:5000/goals/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updatedGoal)
    })
    const data=await res.json()
    
    setGoals(
      goals.map((goal) =>
        goal.id === id ? { ...goal, reminder: data.reminder } : goal
      )
    );
  }
  // Achieve goal
  const achieveGoal = async(id) =>
  {
    let achievedText = 'achieved';
    const goalToAchieve= await
      fetchEachGoal(id)
    const updGoal = { ...goalToAchieve, achieved: achievedText ,reminder: false }
    
    const res = await fetch(`http://localhost:5000/goals/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updGoal)
    })
    const data=await res.json()
    setGoals(
      goals.map((goal) =>
        goal.id === id ? { ...goal, achieved:data.achieved,reminder:data.reminder } : goal
      )
       
    );
   
  }
  //Delete goal
      const deleteGoal =async (id) =>
  {
        await fetch(`http://localhost:5000/goals/${id}`, {
      method:'DELETE',
    })
    setGoals(
      goals.filter((goal) =>
        goal.id !== id
      )
    )      
  }
  return (
    <Router>
    <div className='bigContainer' >
      <nav>
        <Nav />
      </nav>
     <div className="container" onClick={ ()=>{ dropDown===true && setDropDown(false) } }>
          <Header qoutes={ qoutes } />
          <Routes>
            <Route path='/'  exact element={ 
            <>
              <Set onSet={ setNewGoal } dropDown={ dropDown } onDropDown={ onListToggle } />
              { goals.length > 0 ? <Goals goals={ goals } onAchieve={ achieveGoal } onReminder={ toggleReminder } onDelete={ deleteGoal } /> : 'No goals set' }
            </>    
             } />
            <Route path='/about' exact element={ <About/> }> </Route>
          </Routes> 
         
      </div>
      <Footer/>
      </div>
      </Router>
    
  );
}

export default App;
