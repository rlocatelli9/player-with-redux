import { ChevronDown } from 'lucide-react'
import { Lesson } from './Lesson'
import * as Collapsible from '@radix-ui/react-collapsible'
import { useAppSelector } from '../../../core/hooks'
import { selectModule } from '../store/slice'

interface ModuleProps {
  title: string
  amountOfLesson: number
  moduleIndex: number
}

export function Module({ title, amountOfLesson, moduleIndex }: ModuleProps) {
  const { lessons } = useAppSelector(selectModule)[moduleIndex]
  return (
    <Collapsible.Root className='group'>
      <Collapsible.Trigger
        type="button"
        className={`
          flex w-full items-center gap-3 bg-zinc-800 p-4 cursor-pointer
          hover:bg-zinc-700 rounded group-data-[state=open]:border border-zinc-500
        `}
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
        <ChevronDown className="w-5 h-5 ml-auto text-zinc-400 group-data-[state=open]:rotate-180 transition-transform" />
      </Collapsible.Trigger>

      <Collapsible.Content>
        <nav className="relative flex flex-col gap-4 p-6">
          {
            lessons.map(lesson => (
              <Lesson
                key={lesson.id}
                title={lesson.title}
                durationInMilliseconds={lesson.duration}
              />
            ))
          }
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
