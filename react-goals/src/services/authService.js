import React from 'react';
import axios from 'axios';

const authAPI="localhost:5000/users/";
//sign up user
const register= async(firstName,lastName,userName,email,password) => {
  return axios.post(authAPI+ 'sign-up',{
    firstName,lastName,userName,email,password
  })
  .then(response =>{
    if(response.data.accessToken){
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  })
}
//logut user
const logout=()=>{
  localStorage.removeItem("user");
}
// login user
const login=async(email,password)=>{
  return axios.post(authAPI + 'sign-in',{
  email,password
  });
}
//getMe
const getMe=()=>{
  return JSON.parse(localStorage.getItem('user'));
}
const authService = () => {
    login,register,logout,getMe
}

export default authService