import { type SubmitEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../store/slice'

export function AddTodo() {
  const [todo, setTodo] = useState('')
  const dispatch = useDispatch()

  function handleSubmit(event: SubmitEvent) {
    event.preventDefault()
    dispatch(add(todo))
    setTodo('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      method="post"
      style={{
        display: 'flex',
        gap: '1rem',
        justifyContent: 'center',
        paddingTop: '1rem',
      }}
    >
      <input
        aria-label="new todo"
        type="text"
        name="new-todo"
        id="new-todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />

      <button type="submit">Add new TO-DO</button>
    </form>
  )
}
