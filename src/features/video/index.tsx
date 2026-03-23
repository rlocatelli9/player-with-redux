import { ChevronDown, Video } from 'lucide-react'
import { FeedbackButton } from '../../shared/components/feedback-button'
import { VideoHeader } from './components/Header'
import { Module } from './components/Module'
import { VideoPlayer } from './components/Player'

export function PlayerComponent() {
  return (
    <div className="flex w-[1100px] flex-col gap-6">
      <div className="flex items-center justify-between">
        <VideoHeader />

        <FeedbackButton />
      </div>

      <main
        className={`
          relative flex overflow-hidden rounded-lg border border-zinc-800
          bg-zinc-900 shadow pr-80
        `}
      >
        <div className="flex-1">
          <VideoPlayer />
        </div>
        <aside
          className={`
            w-80 absolute top-0 bottom-0 right-0 border-l border-zinc-800
            bg-zinc-900 overflow-y-auto divide-y-2 divide-zinc-900 
            scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800
          `}
        >
          <Module />

          <div>
            <button
              type="button"
              className="flex w-full items-center gap-3 bg-zinc-800 p-4"
              aria-label="Modulo 1: Desvendando o Redux, 12 aulas"
            >
              <span
                className={`
                  flex h-10 w-10 rounded-full items-center 
                  justify-center bg-zinc-950 text-xs
                `}
              >
                1
              </span>
              <span className="flex flex-col gap-1 text-left">
                <strong className="text-sm">Desvendando o Redux</strong>
                <span className="text-sm text-zinc-400">12 aulas</span>
              </span>
              <ChevronDown className="w-5 h-5 ml-auto text-zinc-400" />
            </button>

            <nav className="relative flex flex-col gap-4 p-6">
              <button
                type="button"
                className="flex items-center gap-3 text-sm text-zinc-400"
              >
                <Video className="w-4 h-4 text-zinc-500" />
                <span>Fundamentos do Redux</span>
                <span className="ml-auto font-mono text-xs text-zinc-500">
                  09:10
                </span>
              </button>
              <button
                type="button"
                className="flex items-center gap-3 text-sm text-zinc-400"
              >
                <Video className="w-4 h-4 text-zinc-500" />
                <span>Fundamentos do Redux</span>
                <span className="ml-auto font-mono text-xs text-zinc-500">
                  09:10
                </span>
              </button>
              <button
                type="button"
                className="flex items-center gap-3 text-sm text-zinc-400"
              >
                <Video className="w-4 h-4 text-zinc-500" />
                <span>Fundamentos do Redux</span>
                <span className="ml-auto font-mono text-xs text-zinc-500">
                  09:10
                </span>
              </button>
              <button
                type="button"
                className="flex items-center gap-3 text-sm text-zinc-400"
              >
                <Video className="w-4 h-4 text-zinc-500" />
                <span>Fundamentos do Redux</span>
                <span className="ml-auto font-mono text-xs text-zinc-500">
                  09:10
                </span>
              </button>
            </nav>
          </div>
        </aside>
      </main>
    </div>
  )
}
