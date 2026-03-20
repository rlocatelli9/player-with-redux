import { AddTodo } from "./add-todo"
import { TodoList } from "./todo-list"

export function TodoComponent() {

  return (
    <main id="main" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <AddTodo />
      <TodoList />
    </main>
  )
}
