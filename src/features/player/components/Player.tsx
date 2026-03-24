import ReactPlayer from 'react-player'
import * as Dialog from '@radix-ui/react-dialog'
import { useAppSelector } from '../../../core/hooks'
import { next, selectCurrentLesson, selectPlayer } from '../store/slice'
import { formatMS } from '../utils/number-format'
import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'

const SECONDS_BEFORE_END = 10

export function Player() {
  const playerRef = useRef<HTMLVideoElement | null>(null)
  const [openedOnce, setOpenedOnce] = useState<boolean>(false)
  const [open, setOpen] = useState<boolean>(false)
  const dispatch = useDispatch()

  const initialState = {
    seeking: false,
    playing: false,
    duration: 0,
    loaded: 0,
    played: 0,
    loadedSeconds: 0,
    playedSeconds: 0,
    remain: 0,
  }

  const [state, setState] = useState<typeof initialState>(initialState)

  const current = useAppSelector(selectCurrentLesson)
  const { autoPlay } = useAppSelector(selectPlayer)

  useEffect(() => {
    setOpenedOnce(false)
    setOpen(false)
  }, [current.id])

  const handleDurationChange = () => {
    const player = playerRef.current
    if (!player) return

    setState(prevState => ({ ...prevState, duration: player.duration }))
  }

  const handleProgress = () => {
    const player = playerRef.current

    if (!player || !player.buffered?.length) return

    setState(prevState => ({
      ...prevState,
      loadedSeconds: player.buffered?.end(player.buffered?.length - 1),
      loaded: player.buffered?.end(player.buffered?.length - 1) / player.duration,
    }))
  }

  const handleTimeUpdate = () => {
    const player = playerRef.current

    if (!player || !player.duration) return

    const remaining = player.duration - player.currentTime < 0 ? 0 : Math.floor(player.duration - player.currentTime)

    setState(prevState => ({
      ...prevState,
      playedSeconds: player.currentTime,
      played: player.currentTime / player.duration,
      remain: remaining
    }))

    if (remaining <= SECONDS_BEFORE_END && !openedOnce) {
      setOpen(true)
    }
  }

  return (
    <div className="w-full bg-zinc-950 aspect-video relative">
      <ReactPlayer
        ref={playerRef}
        width="100%"
        height="100%"
        controls
        autoPlay={autoPlay}
        onTimeUpdate={handleTimeUpdate}
        onProgress={handleProgress}
        onDurationChange={handleDurationChange}
        onEnded={() => {
          dispatch(next())
        }}
        aria-label={`${current.title}. Duração: ${formatMS(current.duration)} minutos`}
        src={`https://www.youtube.com/watch?v=${current.id}`}
      />

      <Dialog.Root
        open={open}
      >
        <Dialog.Trigger />
        <Dialog.Portal>
          <Dialog.Overlay />
          <Dialog.Content
            aria-label='Dialog with time remaining to next video'
            className={`
              w-80 h-20 absolute top-[75%] left-[28%] rounded-md bg-zinc-900
              p-2 flex flex-col gap-2 justify-center items-center text-zinc-200 font-mono
            `}
          >
            <Dialog.Title>
              O Video vai terminar em: {state.remain}s
            </Dialog.Title>

            <button
              className={`
                w-20 flex justify-center items-center bg-purple-600 
                rounded cursor-pointer hover:bg-purple-500 transition-colors
              `}
              autoFocus={false}
              onClick={() => {
                setOpenedOnce(true)
                setOpen(false)
              }}
            >
              OK
            </button>
            <Dialog.Close />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}
