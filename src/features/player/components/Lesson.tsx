import { Video } from "lucide-react"
import { formatMS } from "../utils/number-format"
import { useDispatch } from "react-redux"
import { play } from "../store/slice"

interface LessonProps {
  title: string
  durationInMilliseconds: number,
  moduleIndex: number,
  lessonIndex: number
}

export function Lesson({ title, durationInMilliseconds, lessonIndex, moduleIndex }: LessonProps) {
  const duration = formatMS(durationInMilliseconds)
  const dispatch = useDispatch()

  const onClick = () => {
    dispatch(play({ lessonIndex, moduleIndex }))
  }

  return (
    <button
      aria-label={title}
      type="button"
      className="flex items-center gap-3 text-sm text-zinc-400 cursor-pointer"
      onClick={onClick}
    >
      <Video className="w-4 h-4 text-zinc-500" />
      <span>{title}</span>
      <span className="ml-auto font-mono text-xs text-zinc-500">{duration}</span>
    </button>
  )
}