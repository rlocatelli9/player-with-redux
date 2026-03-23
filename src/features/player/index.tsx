import { useAppSelector } from '../../core/hooks'
import { FeedbackButton } from '../../shared/components/feedback-button'
import { Header } from './components/Header'
import { Module } from './components/Module'
import { Player } from './components/Player'
import { selectModule } from './store/slice'

export function PlayerComponent() {
  const modules = useAppSelector(selectModule)

  return (
    <div className="flex w-[1100px] flex-col gap-6">
      <div className="flex items-center justify-between">
        <Header />

        <FeedbackButton />
      </div>

      <main
        className={`
          relative flex overflow-hidden rounded-lg border border-zinc-800
          bg-zinc-900 shadow pr-80
        `}
      >
        <div className="flex-1">
          <Player />
        </div>
        <aside
          className={`
            w-80 absolute top-0 bottom-0 right-0 p-1 border-l border-zinc-800
            bg-zinc-900 overflow-y-auto divide-y-4 divide-zinc-900 
            scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800
          `}
        >
          {
            modules.map(module => (
              <Module
                key={module.id}
                amountOfLesson={module.lessons.length}
                moduleIndex={Number(module.id)}
                title={module.title}
              />
            ))
          }
        </aside>
      </main>
    </div>
  )
}
