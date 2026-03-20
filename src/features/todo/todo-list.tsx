import { useAppSelector } from "../../hooks"

export function TodoList() {
  const todos = useAppSelector(store => {
    return store.todo
  })

  return (
    <ul style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      {todos.map(todo => (<li key={todo}>{todo}</li>))}
    </ul>
  )
}