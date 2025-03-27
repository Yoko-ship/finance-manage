import { createSlice } from "@reduxjs/toolkit";
import { readData } from "../components/Firebase";

const expensesSlice = createSlice({
    name:"expenses",
    initialState:{
        expenses:[],
        income: []
    },
    reducers:{
        getExpenses(state,action){
            state.expenses = action.payload
        },
        getIncome(state,action){
            state.income = action.payload
        }
    }
})

export const {getExpenses,getIncome} = expensesSlice.actions
export default expensesSlice.reducer