import { configureStore } from '@reduxjs/toolkit'
import { getCartData } from './features/baseApi'
 

export const store = configureStore({
    reducer: {
         
        [getCartData.reducerPath]: getCartData.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(getCartData.middleware),
})