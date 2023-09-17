import { configureStore } from '@reduxjs/toolkit'
import { getCartData } from './features/baseApi'
// import sizeQuanty from './features/sizeQuanty'
 
 

export const store = configureStore({
    reducer: {
       // sizeQuntySlice : sizeQuanty,
        [getCartData.reducerPath]: getCartData.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(getCartData.middleware),
})