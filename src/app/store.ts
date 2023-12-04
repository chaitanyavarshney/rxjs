import { configureStore } from '@reduxjs/toolkit'
import counterSlice, { DataActions } from './feature/counter/counterSlice'
import { createEpicMiddleware } from 'redux-observable'

const epicMiddleware = createEpicMiddleware<RootAction, RootAction,RootState>()


export const store = configureStore({
  reducer: {
    info:counterSlice
  },
  middleware: [epicMiddleware],
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type RootAction = DataActions 
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch