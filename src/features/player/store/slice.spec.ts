import { next, play, playerSlice } from './slice'

describe('Slice Player', () => {
  const mockPlay = {
    moduleIndex: 1,
    lessonIndex: 2,
  }

  it('should be able to play', () => {
    const initialState = playerSlice.getInitialState()

    const state = playerSlice.reducer(initialState, play(mockPlay))

    expect(state.current).toEqual(mockPlay)
  })

  it('should be able to next', () => {
    const initialState = playerSlice.getInitialState()

    const state = playerSlice.reducer(initialState, next())

    expect(state.current).toEqual({
      moduleIndex: 0,
      lessonIndex: 1,
    })
  })

  it('should be able to jump module automatically', () => {
    const initialState = playerSlice.getInitialState()

    const state = playerSlice.reducer(
      {
        ...initialState,
        current: {
          moduleIndex: 1,
          lessonIndex: 1,
        },
      },
      next(),
    )

    expect(state.current).toEqual({
      moduleIndex: 2,
      lessonIndex: 0,
    })
  })

  it('should not be able to jump module or lesson if there is no next lesson available', () => {
    const initialState = playerSlice.getInitialState()
    const current = {
      moduleIndex: initialState.course.modules.length - 1,
      lessonIndex: 1,
    }

    const state = playerSlice.reducer(
      {
        ...initialState,
        current,
      },
      next(),
    )

    expect(state.current).toEqual(current)
  })
})