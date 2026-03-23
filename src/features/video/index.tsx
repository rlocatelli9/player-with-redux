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
            w-80 absolute top-0 bottom-0 right-0 p-1 border-l border-zinc-800
            bg-zinc-900 overflow-y-auto divide-y-4 divide-zinc-900 
            scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800
          `}
        >
          <Module moduleIndex={0} amountOfLesson={12} title='Desvendando o Redux' />
          <Module moduleIndex={1} amountOfLesson={6} title='Desvendando o Redux' />
          <Module moduleIndex={2} amountOfLesson={10} title='Desvendando o Redux' />
        </aside>
      </main>
    </div>
  )
}
