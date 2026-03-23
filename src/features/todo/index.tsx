import { AddTodo } from './components/AddTodo'
import { TodoList } from './components/TodoList'

export function TodoComponent() {
  return (
    <main
      id="main"
      style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
    >
      <AddTodo />
      <TodoList />
    </main>
  )
}
