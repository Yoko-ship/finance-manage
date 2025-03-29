import {configureStore} from "@reduxjs/toolkit"
import expensesReducer from "./expensesData"

const store = configureStore({
    reducer:{
        expenses:expensesReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

export default store