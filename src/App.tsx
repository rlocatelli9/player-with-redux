import { Provider as ReduxProvider } from "react-redux"
import { TodoComponent } from "./features/todo"
import { store } from "./stores"

export function App() {
  return (
    <ReduxProvider store={store}>
      <TodoComponent />
    </ReduxProvider>
  )
}

