import axios from "axios";
import authHeader from "./authHeader";

const authAPI="localhost:5000/users/";
getPubicContent=()=>{
    return axios.get(authAPI + 'ALL');
}
getUser=()=>{
    return axios.get(authAPI + 'user', {headers, authHeader});
}



const userService = () => {
getPubicContent,getUser
}
export default userService