import { createSlice, createAsyncThunk, configureStore } from "@reduxjs/toolkit";
import goalService from "./goalService";

const initialState={
    goals:[],
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:''
}

// set goal
export const setGoal = createAsyncThunk('goals/set', async (goalData, thunkAPI) =>
{
    try {
        const token=thunkAPI.getState().auth.user.token
        return await goalService.setGoal(goalData,token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
       return thunkAPI.rejectWithValue(message) 
    }
})
 
// get goals
export const getGoals = createAsyncThunk('goals/getAll', async (_, thunkAPI) =>
{
    try {
        const token = thunkAPI.getState().auth.user.token
        return await goalService.getGoals(token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
       return thunkAPI.rejectWithValue(message) 
    }
})
    
export const goalSlice = createSlice({
    name:'goal',
    initialState,
    reducers:{
        reset:(state) => initialState
    },
    extraReducers: (builder) =>
    {
        builder
        .addCase(setGoal.pending, (state) =>
        {
            state.isLoading = false
            
        })
        .addCase(setGoal.fulfilled, (state,action) =>
        {
            state.isLoading = false
            state.isSuccess = true
            state.goals.push(action.payload)
        })
        .addCase(setGoal.rejected, (state,action) =>
        {
            state.isLoading = false
            state.isError = true
            state.message=action.payload
        })

        .addCase(getGoals.pending, (state) =>
        {
            state.isLoading = false
            
        })
        .addCase(getGoals.fulfilled, (state,action) =>
        {
            state.isLoading = false
            state.isSuccess = true
            state.goals=action.payload
        })
        .addCase(getGoals.rejected, (state,action) =>
        {
            state.isLoading = false
            state.isError = true
            state.message=action.payload
        })
        
    }
})


export const { reset } = goalSlice.actions
export default goalSlice.reducer