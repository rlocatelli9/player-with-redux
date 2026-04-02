import { next, play, playerSlice } from './slice'

describe('Slice Player', () => {
  const mockPlay = {
    moduleIndex: 1,
    lessonIndex: 2
  }

  it('should be able to play', () => {


    const initialState = playerSlice.getInitialState()

    const state = playerSlice.reducer(
      initialState,
      play(mockPlay)
    )

    expect(state.current).toEqual(mockPlay)
  })

  it('should be able to next', () => {
    const initialState = playerSlice.getInitialState()

    const state = playerSlice.reducer(
      initialState,
      next()
    )

    expect(state.current).toEqual({
      moduleIndex: 0,
      lessonIndex: 1
    })
  })
})