import Header from './Header';
import Set from './Set';
import Goals from './Goals';
import Nav from './Nav';
import Footer from './Footer';
import About from './About';
import LongTermGoals from './LongTermGoals';
import AchievedGoals from './AchievedGoals';
import Login from './Login';
import Register from './Register';
import { useState,useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { getQuote } from 'inspirational-quotes';


const Home = () =>
{
    const [goals, setGoals] = useState([])
   
  const [qoutes, setQoutes] = useState([
        getQuote()
  ]);
  const [dropDown, setDropDown] = useState(false);
  const [displaySet, setDisplaySet] = useState(false);
  useEffect(() =>
  {
    const getGoals = async () =>
    {
      const fetchedGoals = await fetchGoals()
      setGoals(fetchedGoals)
    }
    getGoals();
  }, []);
  //display setGoal
  const onDisplaySet = () => { setDisplaySet(!displaySet); }
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
        goal._id === id ? { ...goal, reminder: data.reminder } : goal
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
        goal._id === id ? { ...goal, achieved:data.achieved,reminder:data.reminder } : goal
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
        goal._id !== id
      )
    )      
  }
  return (
  <Router>
    <div className='bigContainer' >
      <nav>
        <Nav />
      </nav>
        <div className="container" onClick={ () => { dropDown === true && setDropDown(false) } }>
       
          <Routes>
            <Route path='/Goals.'  element={ 
            <>  
              <Header qoutes={ qoutes } />
              <Set onSet={ setNewGoal } dropDown={ dropDown } onDropDown={ onListToggle } displaySet={ displaySet } onDisplaySet={ onDisplaySet } />
              { goals.length > 0 ? <Goals goals={ goals } onAchieve={ achieveGoal } onReminder={ toggleReminder } onDelete={ deleteGoal } /> : 'No goals set' }
            </>    
            } />
            <Route path='/longtermgoals' exact element={
              <>
                <Header qoutes={ qoutes } />
                <Set onSet={ setNewGoal } dropDown={ dropDown } onDropDown={ onListToggle } displaySet={ displaySet } onDisplaySet={ onDisplaySet } />
              { goals.length > 0 ? <LongTermGoals goals={ goals } onAchieve={ achieveGoal } onReminder={ toggleReminder } onDelete={ deleteGoal } /> : 'No long-term goals set' }
              </> }></Route>
            <Route path='/achievedgoals' exact element={
              <>
                <Header qoutes={ qoutes } />
                <Set onSet={ setNewGoal } dropDown={ dropDown } onDropDown={ onListToggle } displaySet={ displaySet } onDisplaySet={ onDisplaySet } />
                {  goals.length > 0 ?<AchievedGoals goals={ goals } onDelete={ deleteGoal } /> : 'No achieved goals yet' }
            </> } />
            <Route path='/about' exact element={
              <>
              <Header qoutes={ qoutes } />
                <About />
              </> }>
            </Route>
            <Route path='/register' exact element={ <Register /> } />
            <Route path='/login' exact element={
              <Login /> } />
          </Routes> 
      </div>
      <Footer/>
    </div>
  </Router>
    
  );
}


export default Home