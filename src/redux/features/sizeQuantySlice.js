import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    size : ''
}

const sizeQuntySlice = createSlice({
    name: 'sizeQuanty',
    initialState,
    reducers: {
        sizeQuntyHandler : (state,{payload})=> state.size = payload 
    }
})

export const {sizeQuntyHandler} = sizeQuntySlice.actions
export default sizeQuntySlice.reducer