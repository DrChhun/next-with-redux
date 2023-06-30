'use client';

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../../app/store'

// Define a type for the slice state
interface ReviewState {
    value: string
}

// Define the initial state using that type
const initialState: ReviewState = {
    value: '',
}

export const reviewSlice = createSlice({
    name: 'review',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        comment: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        },
        decrement: (state) => {
            state.value = ''
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
    },
})

export const { comment, decrement, incrementByAmount } = reviewSlice.actions
export default reviewSlice.reducer