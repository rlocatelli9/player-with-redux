import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../../core/store'
import type { CourseProps, CurrentVideoProps, ModuleProps, PlayerStateProps } from '../schemas'

const initialState: PlayerStateProps = {
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
    save: (state, action: PayloadAction<CourseProps>) => {
      const { modules } = action.payload
      state.course = { modules }

    },
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

export const { play, next, save } = playerSlice.actions

export const selectPlayer = (state: RootState) => state.player
export const selectModule = (state: RootState) => state.player.course?.modules || [] as ModuleProps[]
export const selectCurrentModule = (state: RootState) => {
  if (!state.player.course?.modules.length) return null
  return state.player.course?.modules[state.player.current.moduleIndex]
}
export const selectCurrentLesson = (state: RootState) => {
  if (!state.player.course?.modules.length) return null
  return state.player.course
    ?.modules[state.player.current.moduleIndex]
    .lessons[state.player.current.lessonIndex]
}
