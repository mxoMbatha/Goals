import { Link } from "react-router-dom";
import React from 'react'
const About = () =>
{
    return (
        <div className="about box">
            <p> Version - 1.0</p>
        
            <p>
                This is a web app for organising your life and getting your priorities straight. More than a to-do list Goals helps setting goals for the day, month and long-term life goals.Set your goal, a timeframe and jugde how efficiently you reach success.
            </p>
              
           <div className="last-qoute"><h1><Link to="/">Goals</Link></h1>
                <p >Set your priorities straight. Stay Inspired !</p>
            </div>
        </div>
  )  
}
export default About