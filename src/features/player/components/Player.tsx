import ReactPlayer from 'react-player'
import { useAppSelector } from '../../../core/hooks'
import { selectCurrentLesson } from '../store/slice'
import { formatMS } from '../utils/number-format'

export function Player() {
  const current = useAppSelector(selectCurrentLesson)

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        aria-label={`${current.title}. Duração: ${formatMS(current.duration)} minutos`}
        src={`https://www.youtube.com/watch?v=${current.id}`}
      />
    </div>
  )
}
