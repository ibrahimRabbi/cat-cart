import { configureStore } from '@reduxjs/toolkit'
import { getCartData } from './features/baseApi'
// import { counterSlice } from './features/cartSlice'
 

export const store = configureStore({
    reducer: {
         //totalValue : counterSlice,
        [getCartData.reducerPath]: getCartData.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(getCartData.middleware),
})