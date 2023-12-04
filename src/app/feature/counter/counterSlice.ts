import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

// Define a type for the slice state
interface CounterState {
  loading:boolean,
  data:any,
  error:string
}

// Define the initial state using that type
const initialState: CounterState = {
  loading: true,
  data: '',
  error:''
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    post: (state) => {
      state.loading =true
    },
    postDetail: (state,action) => {
      state.loading = false;
      state.error = '';
      state.data = action.payload
    },
    Error: (state, action) => {
        state.loading = false;
        state.data = '';
        state.error = action.payload
    },
  },
})

export const { Error,post,postDetail } = counterSlice.actions
export default counterSlice.reducer
export type DataActions = ReturnType<typeof post>  | ReturnType<typeof postDetail>;