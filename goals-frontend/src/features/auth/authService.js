import axios from 'axios'


const API_link='/users';
const register= async(userData)=>{
    const response=await axios.post(API_link,userData)
    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))
    }
    return response.data
}
const login= async(userData)=>{
    const response=await axios.post(API_link+'/login',userData)
    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))
    }
    return response.data
}
const logout = () => {
    localStorage.removeItem('user')
}
const authService={
    register,
    logout,
    login,
}
export default authService