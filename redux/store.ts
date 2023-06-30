'use client';

import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './freatures/counter/counterSlice'
import commentReducer from './freatures/comment/commentSlice'
import reviewReducer from './freatures/review/reviewSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        comment: commentReducer,
        review: reviewReducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch