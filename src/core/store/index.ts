import { configureStore } from "@reduxjs/toolkit"
import { todoSlice } from "../../features/todo/store/slice"
import { videoSlice } from "../../features/video/store/slice"

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
    video: videoSlice.reducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch