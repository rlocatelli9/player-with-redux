import { useAppSelector } from '../../../core/hooks'
import { selectTodo } from '../store/slice'

export function TodoList() {
  const todos = useAppSelector(selectTodo)

  return (
    <ul
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  )
}