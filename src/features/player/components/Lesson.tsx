import { PlayCircle, Video } from "lucide-react"
import { formatMS } from "../utils/number-format"
import { useDispatch } from "react-redux"
import { play, selectCurrentLesson, selectModule } from "../store/slice"
import { useAppSelector } from "../../../core/hooks"

interface LessonProps {
  title: string
  durationInMilliseconds: number,
  moduleIndex: number,
  lessonIndex: number
}

export function Lesson({ title, durationInMilliseconds, lessonIndex, moduleIndex }: LessonProps) {
  const duration = formatMS(durationInMilliseconds)
  const currentLesson = useAppSelector(selectCurrentLesson)
  const { id } = useAppSelector(selectModule)[moduleIndex].lessons[lessonIndex]
  const isCurrent = currentLesson.id === id

  const dispatch = useDispatch()

  const onClick = () => {
    dispatch(play({ lessonIndex, moduleIndex }))
  }

  return (
    <button
      aria-label={title}
      data-active={isCurrent}
      disabled={isCurrent}
      className="cursor-pointer flex items-center gap-3 text-sm text-zinc-400 enabled:hover:text-zinc-100 group"
      onClick={onClick}
    >
      {isCurrent ? (
        <PlayCircle className="w-4 h-4 text-emerald-400" />
      ) : (
        <Video className="w-4 h-4 text-zinc-500" />
      )}
      <span className="group-data-[active=true]:text-emerald-400">{title}</span>
      <span className="ml-auto font-mono text-xs text-zinc-500 group-data-[active=true]:text-emerald-400">{duration}</span>
    </button>
  )
}