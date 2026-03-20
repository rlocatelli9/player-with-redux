import { createSlice } from "@reduxjs/toolkit"

export const todoSlice = createSlice({
  name: 'todo',
  initialState: ['Estudar mais!'],
  reducers: {
    add: (state, {payload}) => {
      state.push(payload)
    }
  }
})

export const { add }  = todoSlice.actions
