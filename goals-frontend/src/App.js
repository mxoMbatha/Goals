import React from 'react';
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login'
import Navigation from './features/Navigation';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashbord from './pages/Dashbord';
function App() {
  return (
    <>
    <Router>
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register />}/>
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<Dashbord />} />
           
           
      </Routes>
    </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
