import { Provider as ReduxProvider } from "react-redux"
import { TodoComponent } from "./features/todo"
import { store } from "./stores"

export function App() {
  return (
    <main className="h-dvh w-dvw bg-zinc-900 text-zinc-50 flex justify-center items-center">
      <TodoComponent />
    </main>
  )
}

