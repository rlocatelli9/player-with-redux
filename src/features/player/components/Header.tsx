import { useAppSelector } from "../../../core/hooks"
import { selectCurrentLesson, selectCurrentModule } from "../store/slice"

export function Header() {
  const currentModule = useAppSelector(selectCurrentModule)
  const currentLesson = useAppSelector(selectCurrentLesson)

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">{currentLesson.title}</h1>
      <span className="text-sm text-zinc-400">
        {`Módulo "${currentModule.title}"`}
      </span>
    </div>
  )
}
