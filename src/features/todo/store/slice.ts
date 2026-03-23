import { createSlice } from "@reduxjs/toolkit"
import type { RootState } from "../../../core/store"

export const todoSlice = createSlice({
  name: 'todo',
  initialState: ['Estudar mais!'],
  reducers: {
    add: (state, { payload }) => {
      state.push(payload)
    }
  }
})

export const { add } = todoSlice.actions
export const selectTodo = (state: RootState) => state.todo
