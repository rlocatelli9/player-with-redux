import { Player } from './features'
import { PlayerComponent } from './features/player'

export function App() {
  return (
    <main
      className={`
        h-dvh w-dvw bg-black text-zinc-50 flex justify-center items-center
      `}
    >
      <PlayerComponent />
    </main>
  )
}
