import { createSlice } from "@reduxjs/toolkit"
import type { RootState } from "../../../core/store"

export interface TodoState {
  id: string
  tile: string
  description: string
  isConcluded: boolean
  createdAt: Date
  updatedAt: Date | null
  deletedAt: Date | null
}

const initialState: TodoState[] = []

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add: (state, { payload }) => {
      state.push(payload)
    }
  }
})

export const { add } = todoSlice.actions
export const selectTodo = (state: RootState) => state.todo
