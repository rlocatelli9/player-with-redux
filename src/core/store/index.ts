import { configureStore } from "@reduxjs/toolkit"
import { playerSlice } from "../../features/player/store/slice"
import { todoSlice } from "../../features/todo/store/slice"

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
    player: playerSlice.reducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch