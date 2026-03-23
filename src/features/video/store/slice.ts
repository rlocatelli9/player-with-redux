// src/entities/video/model/slice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../../core/store'
import type { Video } from '../../../shared/types'

export interface VideoState {
  currentVideo: Video | null
  status: 'idle' | 'loading' | 'error'
}

const initialState: VideoState = {
  currentVideo: null,
  status: 'idle',
}

export const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    setVideo: (state, action: PayloadAction<Video>) => {
      state.currentVideo = action.payload
    },
  },
})

export const { setVideo } = videoSlice.actions
export const selectVideo = (state: RootState) => state.video
