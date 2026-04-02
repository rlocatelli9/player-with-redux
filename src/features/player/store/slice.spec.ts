import { next, play, playerSlice } from './slice'

describe('Slice Player', () => {
  const mockPlay = {
    moduleIndex: 1,
    lessonIndex: 2,
  }

  const modulesMock = [
    {
      id: 0,
      title: "React Fundamentals",
      lessons: [
        { id: "NhUr8cwDiiM", title: "What is React?", duration: 600000 },
        { id: "_gHr2Pe5LCY", title: "Creating the first project", duration: 1200000 }
      ]
    },
    {
      id: 1,
      title: "State and Immutability",
      lessons: [
        { id: "mY9MLdifqe0", title: "Understanding useState", duration: 900000 },
        { id: "YMxc9biU9ms", title: "Working with Lists", duration: 750000 }
      ]
    },
    {
      id: 2,
      title: "Introduction to Redux",
      lessons: [
        { id: "69e1MoUWE1g", title: "Flux and Redux Architecture", duration: 1800000 },
        { id: "2lxCaLJ2Rbk", title: "Actions and Reducers", duration: 2100000 }
      ]
    },
    {
      id: 3,
      title: "Redux Toolkit (RTK)",
      lessons: [
        { id: "3aFexvlQ2A8", title: "Simplifying with RTK", duration: 2400000 },
        { id: "ciTi5tPCKa8", title: "Configuring the Store", duration: 1320000 }
      ]
    },
    {
      id: 4,
      title: "Asynchronous Calls",
      lessons: [
        { id: "z2XCUu2wIl0", title: "Redux Thunk in Practice", duration: 2700000 },
        { id: "FnKc64b7bUI", title: "HTTP Requests with Axios", duration: 1980000 }
      ]
    }
  ]

  it('should be able to play', () => {
    const initialState = playerSlice.getInitialState()

    const state = playerSlice.reducer(initialState, play(mockPlay))

    expect(state.current).toEqual(mockPlay)
  })

  it('should be able to next', () => {
    const initialState = playerSlice.getInitialState()

    const state = playerSlice.reducer({
      ...initialState,
      course: {
        modules: modulesMock
      },
    }, next())

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
        course: {
          modules: modulesMock
        },
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
      moduleIndex: modulesMock.length - 1,
      lessonIndex: 1,
    }

    const state = playerSlice.reducer(
      {
        ...initialState,
        course: {
          modules: modulesMock
        },
        current,
      },
      next(),
    )

    expect(state.current).toEqual(current)
  })
})