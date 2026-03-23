import { ChevronDown, Video } from 'lucide-react'
import { Lesson } from './Lesson'

interface ModuleProps {
  title: string
  amountOfLesson: number
  moduleIndex: number
}

export function Module({ title, amountOfLesson, moduleIndex }: ModuleProps) {
  return (
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
          {moduleIndex + 1}
        </span>
        <span className="flex flex-col gap-1 text-left">
          <strong className="text-sm">{title}</strong>
          <span className="text-sm text-zinc-400">{amountOfLesson} aulas</span>
        </span>
        <ChevronDown className="w-5 h-5 ml-auto text-zinc-400" />
      </button>

      <nav className="relative flex flex-col gap-4 p-6">
        <Lesson title='Fundamentos do Redux' durationInMilliseconds={530000} />
        <Lesson title='Fundamentos do Redux' durationInMilliseconds={510000} />
        <Lesson title='Fundamentos do Redux' durationInMilliseconds={500000} />
        <Lesson title='Fundamentos do Redux' durationInMilliseconds={400000} />
      </nav>
    </div>
  )
}
