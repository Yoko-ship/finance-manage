import {configureStore} from "@reduxjs/toolkit"
import expensesReducer from "./expensesData"

const store = configureStore({
    reducer:{
        expenses:expensesReducer
    }
})

export default store