// src/entities/video/model/slice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../../core/store'

export interface ModuleProps {
  modules: {
    id: string
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
  course: ModuleProps
  autoPlay: boolean
}

const initialState: VideoState = {
  current: {
    moduleIndex: 0,
    lessonIndex: 0
  },
  course: {
    modules: [
      {
        id: "0",
        title: "React Fundamentals",
        lessons: [
          { id: "NhUr8cwDiiM", title: "What is React?", duration: 600000 },
          { id: "_gHr2Pe5LCY", title: "Creating the first project", duration: 1200000 }
        ]
      },
      {
        id: "1",
        title: "State and Immutability",
        lessons: [
          { id: "mY9MLdifqe0", title: "Understanding useState", duration: 900000 },
          { id: "YMxc9biU9ms", title: "Working with Lists", duration: 750000 }
        ]
      },
      {
        id: "2",
        title: "Introduction to Redux",
        lessons: [
          { id: "69e1MoUWE1g", title: "Flux and Redux Architecture", duration: 1800000 },
          { id: "2lxCaLJ2Rbk", title: "Actions and Reducers", duration: 2100000 }
        ]
      },
      {
        id: "3",
        title: "Redux Toolkit (RTK)",
        lessons: [
          { id: "3aFexvlQ2A8", title: "Simplifying with RTK", duration: 2400000 },
          { id: "ciTi5tPCKa8", title: "Configuring the Store", duration: 1320000 }
        ]
      },
      {
        id: "4",
        title: "Asynchronous Calls",
        lessons: [
          { id: "z2XCUu2wIl0", title: "Redux Thunk in Practice", duration: 2700000 },
          { id: "FnKc64b7bUI", title: "HTTP Requests with Axios", duration: 1980000 }
        ]
      }
    ]
  },
  autoPlay:true,
}

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    play: (state, action: PayloadAction<CurrentVideoProps>) => {
      state.current = action.payload
    },
    next: (state) => {
      const nextLessonExists = state.current.lessonIndex < state.course.modules[state.current.moduleIndex].lessons.length - 1
      const nextModuleExists = state.current.moduleIndex < state.course.modules.length - 1
      if(nextLessonExists){
        state.current = {
          ...state.current,
          lessonIndex: state.current.lessonIndex + 1
        }
      } else if(nextModuleExists){
        state.current = {
          moduleIndex: state.current.moduleIndex + 1,
          lessonIndex: 0
        }
      } else {
        console.info('You completed the course')
      }
    }
  },
})

export const { play, next } = playerSlice.actions

export const selectPlayer = (state: RootState) => state.player
export const selectModule = (state: RootState) => state.player.course.modules
export const selectCurrentModule = (state: RootState) => state.player.course.modules[state.player.current.moduleIndex]
export const selectCurrentLesson = (state: RootState) => {
  return state.player.course
    .modules[state.player.current.moduleIndex]
    .lessons[state.player.current.lessonIndex]
}
