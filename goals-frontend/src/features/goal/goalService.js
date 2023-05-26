import axios from "axios";

const API_link = '/goals'
const setGoal = async (goalData,token) =>
{   
    const config = {
        headers: {
                Authorization: `Berar ${token}`
            },
        }
    const response = await axios.post(API_link, goalData, config)
    return response.data
}
const getGoals = async (goalData,token) =>
{   
    const config = {
        headers: {
                Authorization: `Berar ${token}`
            },
        }
    const response = await axios.get(API_link, config)
    return response.data
}
const goalService = {
    setGoal,
    getGoals
}
export default goalService