import { createSlice } from "@reduxjs/toolkit";
import { readData } from "../components/Firebase";

const expensesSlice = createSlice({
    name:"expenses",
    initialState:{
        expenses:[],
        income: [],
        user: null
    },
    reducers:{
        getExpenses(state,action){
            state.expenses = action.payload
        },
        getIncome(state,action){
            state.income = action.payload
        },
        authUser(state,action){
            state.user = action.payload
        }
    },
    
})

export const {getExpenses,getIncome,authUser} = expensesSlice.actions
export default expensesSlice.reducer