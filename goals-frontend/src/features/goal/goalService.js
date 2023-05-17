import axios from "axios";

const API_link = '/goals'
const createGoal = async (goalData) =>
{
    const response = await axios.post(API_link, goalData)
    if (response.data) {
        
    }
}