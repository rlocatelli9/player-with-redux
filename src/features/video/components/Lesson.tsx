import { Video } from "lucide-react"
import { formatMS } from "../utils/number-format"

interface LessonProps {
  title: string
  durationInMilliseconds: number
}

export function Lesson({ title, durationInMilliseconds }: LessonProps) {
  const duration = formatMS(durationInMilliseconds)
  return (
    <button
      type="button"
      className="flex items-center gap-3 text-sm text-zinc-400"
    >
      <Video className="w-4 h-4 text-zinc-500" />
      <span>{title}</span>
      <span className="ml-auto font-mono text-xs text-zinc-500">{duration}</span>
    </button>
  )
}