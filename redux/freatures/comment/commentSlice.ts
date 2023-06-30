'use client';

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../../app/store'

// Define a type for the slice state
interface CommentState {
    value: string
}

// Define the initial state using that type
const initialState: CommentState = {
    value: '',
}

export const commentSlice = createSlice({
    name: 'comment',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        greeting: (state) => {
            state.value = 'Hello guys'
        },
        congrate: (state) => {
            state.value = 'Congratulation!!!'
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
    },
})

export const { greeting, congrate, incrementByAmount } = commentSlice.actions
export default commentSlice.reducer