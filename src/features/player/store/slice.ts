// src/entities/video/model/slice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../../core/store'

export interface ModuleProps {
  modules: {
    id: number
    title: string
    lessons: {
      id: string
      title: string
      duration: number
    }[]
  }[]
}

export interface CurrentVideoProps {
  moduleIndex: number,
  lessonIndex: number
}

export interface VideoState {
  current: CurrentVideoProps
  course: ModuleProps | null
  autoPlay: boolean
}

const initialState: VideoState = {
  current: {
    moduleIndex: 0,
    lessonIndex: 0
  },
  course: null,
  autoPlay: true,
}

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    play: (state, action: PayloadAction<CurrentVideoProps>) => {
      state.current = action.payload
    },
    next: (state) => {
      if (state.course?.modules.length) {
        const nextLessonExists = state.current.lessonIndex < state.course?.modules[state.current.moduleIndex].lessons.length - 1
        const nextModuleExists = state.current.moduleIndex < state.course?.modules.length - 1
        if (nextLessonExists) {
          state.current = {
            ...state.current,
            lessonIndex: state.current.lessonIndex + 1
          }
        } else if (nextModuleExists) {
          state.current = {
            moduleIndex: state.current.moduleIndex + 1,
            lessonIndex: 0
          }
        } else {
          console.info('You completed the course')
        }
      }
    }
  },
})

export const { play, next } = playerSlice.actions

export const selectPlayer = (state: RootState) => state.player
export const selectModule = (state: RootState) => state.player.course?.modules || [] as ModuleProps[]
export const selectCurrentModule = (state: RootState) => {
  if (!state.player.course?.modules.length) return 0
  return state.player.course?.modules[state.player.current.moduleIndex]
}
export const selectCurrentLesson = (state: RootState) => {
  if (!state.player.course?.modules.length) return 0
  return state.player.course
    ?.modules[state.player.current.moduleIndex]
    .lessons[state.player.current.lessonIndex]
}
